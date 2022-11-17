import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import EventSeatIcon from "@material-ui/icons/EventSeat";

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "500px",
    },
  },
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const ModalTicketFormUI = (props) => {
  const classes = useStyles();
  const {
    open,
    onClose,
    selectedValue,
    populate,
    schedulesAvilable,
    handleCreateSchedule,
    handleUpdateSchedule,
    moviesAvilable,
    roomsAvilable,
    handleCreateTicket,
  } = props;

  const [positionsSchedules, setPositionsSchedules] = useState([]);

  const [state, setState] = useState(false);

  const [payMethodAvilable, setPayMethodAvilable] = useState([
    { _id: "637473577460d3e37a258719", card: "MASTERCARD" },
  ]);

  const toggle = () => {
    setState(!state);
    /* const swal = "";
    swal({
      title: "Confirmaste you seat",
      text: "Your seat corresponds to row 1 column A ",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({ text: "your seat was reserved", icon: "success" });
      }
    }); */
  };

  // const confirmacionSeat = () => {
  //   swal({
  //     title: 'Confirmaste you seat',
  //     text: 'Your seat corresponds to row 1 column A ',
  //     icon: 'warning',
  //     buttons: ['No', 'Yes'],
  //   }).then(respuesta=>{
  //     if(respuesta){
  //       swal({text: 'your seat was reserved',
  //     icon: 'success',})
  //     }
  //   })
  // };

  const handleClickSchedulePosition = (values, formikProps) => {
    formikProps.setFieldValue("schedule", values);
    setPositionsSchedules(values.positions);
  };

  const handleClickChangePositionState = (position, e) => {
    console.log(e);
    position.busy = true;
    setPositionsSchedules(...position, !position.busy);
  };

  //TODO: SACAR EL DATO HARDCODEADO Y COLOCAR EL VERDADERO VALOR OBJECTID
  const handleSubmitForm = async (values) => {
    const posi = [
      { row: "D", col: "1" },
      { row: "D", col: "2" },
    ];

    const body = {
      schedule: values.schedule._id,
      //position: values.position,
      position: posi,
      pay_method: values.pay_method._id,
    };
    console.log(body);
    if (!body) {
      onClose();
      return;
    }
    await handleCreateTicket(body);

    populate();
    onClose();
  };

  const {
    id = selectedValue ? selectedValue._id : undefined,
    schedule = selectedValue ? selectedValue?.schedule : "",
    position = selectedValue ? selectedValue?.position : [],
    seller = selectedValue ? selectedValue?.seller : "",
    pay_method = selectedValue ? selectedValue?.pay_method : "",
    price = selectedValue ? selectedValue?.price : "",
    date = selectedValue ? selectedValue?.date : "",
  } = selectedValue || {};

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth="sm"
      className={classes.dialogRoot}
    >
      <DialogTitle>
        {selectedValue ? `Editar horario` : `Crear horario`}
      </DialogTitle>

      <Formik
        enableReinitialize
        initialValues={{
          id,
          schedule,
          position,
          seller,
          pay_method,
          price,
          date,
        }}
        /* validate={handleValidations} */
        /* onSubmit={handleSubmitForm} */
      >
        {(formikProps) => (
          <>
            <DialogContent>
              <form
                noValidate
                autoComplete="off"
                align="center"
                /* onSubmit={formikProps.handleSubmit} */
              >
                <Grid
                  item
                  xs={12}
                  container
                  style={{
                    overflowWrap: "break-word",
                    paddingTop: 15,
                    paddingBottom: 20,
                    /*  paddingLeft: 40,
                    paddingRight: 25, */
                  }}
                >
                  {/*  <div>
                    <button
                      startIcon={<EventSeatIcon />}
                      onClick={toggle}
                      className={
                        "toggle--button " + (state ? "toggle--occupied" : "")
                      }
                 
                      color="primary"
                    >
                      {state ? "occupied" : "available"}
                    </button>
                  </div> */}

                  <Grid xs={12}>
                    {/* <FormControl
                      variant="standard"
                      xs={12}
                      //className={classes.formControl}
                    > */}
                    <Autocomplete
                      //required
                      //className={classes.autocomplete}
                      formikProps={formikProps}
                      limitTags={1}
                      id="schedule"
                      name="Horario"
                      options={schedulesAvilable}
                      disableCloseOnSelect
                      value={formikProps.values.schedule}
                      onChange={(_, values) => {
                        /* formikProps.setFieldValue("schedule", values); */
                        handleClickSchedulePosition(values, formikProps);
                      }}
                      getOptionSelected={(option, value) =>
                        option._id === value._id
                      }
                      getOptionLabel={(option) =>
                        option?.movie?.title + " " + option.date ?? ""
                      }
                      helperText={formikProps.errors.schedule ?? ""}
                      error={!!formikProps.errors.schedule}
                      renderOption={(option, { selected }) => (
                        <>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            //className={classes.checkBoxMargin}
                            checked={selected}
                          />
                          {option?.movie?.title + " " + option.date}
                        </>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label={"Horarios"}
                          helperText={formikProps.errors?.schedule}
                          error={!!formikProps.errors.schedule}
                        />
                      )}
                    />
                    {/*  </FormControl> */}

                    <Grid xs={12}>
                      {positionsSchedules.map((pos) => (
                        <Button
                          disableElevation
                          startIcon={<EventSeatIcon />}
                          onClick={(e) =>
                            handleClickChangePositionState(pos, e)
                          }
                          color={pos.busy ? "primary" : "secondary"}
                        >
                          {pos.row}
                          {pos.col}
                        </Button>
                      ))}
                    </Grid>

                    <Grid item xs={12}>
                      <Autocomplete
                        //required
                        //className={classes.autocomplete}
                        formikProps={formikProps}
                        limitTags={1}
                        id="pay_metho"
                        name="Metodo de pago"
                        options={payMethodAvilable}
                        disableCloseOnSelect
                        value={formikProps.values.pay_method}
                        onChange={(_, values) => {
                          formikProps.setFieldValue("pay_method", values);
                        }}
                        getOptionSelected={(option, value) =>
                          option._id === value._id
                        }
                        getOptionLabel={(option) => option.card ?? ""}
                        helperText={formikProps.errors.pay_method ?? ""}
                        error={!!formikProps.errors.pay_method}
                        renderOption={(option, { selected }) => (
                          <>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              //className={classes.checkBoxMargin}
                              checked={selected}
                            />
                            {option.card}
                          </>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label={"Metodo de pago"}
                            helperText={formikProps.errors?.pay_method}
                            error={!!formikProps.errors.pay_method}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <Divider />
            <DialogActions
              style={{ paddingTop: 5, paddingRight: 35, paddingBottom: 20 }}
            >
              <Button
                className={classes.button}
                disableElevation
                variant="outlined"
                onClick={() => onClose()}
              >
                Cerrar
              </Button>
              <Button
                className={classes.button}
                type="submit"
                disableElevation
                variant="contained"
                color="primary"
                onClick={() => handleSubmitForm(formikProps.values)}
                /* disabled={loadingSubmit || !dirty} */
              >
                {selectedValue ? `Guardar` : `Vender`}
                {/* {loadingSubmit && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )} */}
              </Button>
            </DialogActions>
          </>
        )}
      </Formik>

      <Divider />
    </Dialog>
  );
};

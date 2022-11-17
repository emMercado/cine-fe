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
  FormControlLabel,
  Grid,
  Input,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import { CheckBox } from "@material-ui/icons";

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
    populates,
    schedulesAvilable,
    handleCreateTicket,
    setOpenModal,
  } = props;

  const [positionsSchedules, setPositionsSchedules] = useState([]);
  const [payMethodAvilable, setPayMethodAvilable] = useState([
    { _id: "637473577460d3e37a258719", card: "MASTERCARD" },
    { _id: "637473577460d3e37a258718", card: "VISA" },
  ]);

  const handleChangePosition = (event, values, formikProps) => {
    const string = event.target.value;
    const position = { row: string[0].toString(), col: parseInt(string[1]) };

    const positionchange = positionsSchedules.map((pos) => {
      if (pos.row === position.row && pos.col === position.col && !pos.busy) {
        return {
          ...positionsSchedules,
          row: pos.row,
          col: pos.col,
          busy: true,
        };
      }

      if (
        pos.row === position.row &&
        pos.col === position.col &&
        pos.busy === true
      ) {
        return {
          ...positionsSchedules,
          row: pos.row,
          col: pos.col,
          busy: false,
        };
      }
      return pos;
    });

    setPositionsSchedules(positionchange);
    formikProps.setFieldValue("position", position);
  };

  const handleClickSchedulePosition = (values, formikProps) => {
    formikProps.setFieldValue("schedule", values);
    setPositionsSchedules(values.positions);
  };

  const handleSubmitForm = async (values) => {
    try {
      const body = {
        schedule: values.schedule._id,
        position: values.position,
        pay_method: values.pay_method.card,
        price: values.price,
      };

      if (!body) {
        onClose();
        return;
      }
      await handleCreateTicket(body);
    } catch (error) {
      console.error(error);
    }
    onClose();
    populate();
    populates();
  };

  const {
    id = selectedValue ? selectedValue._id : undefined,
    schedule = "",
    position = "",
    seller = "",
    pay_method = "",
    price = selectedValue ? selectedValue?.price : "500",
  } = selectedValue || {};

  return (
    <Dialog
      open={open}
      onClose={onClose}
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
                  }}
                >
                  <Grid item xs={12}>
                    <Autocomplete
                      //required
                      formikProps={formikProps}
                      limitTags={1}
                      id="schedule"
                      name="Horario"
                      defaultValue={""}
                      options={schedulesAvilable}
                      disableCloseOnSelect
                      value={formikProps.values.schedule}
                      onChange={(_, values) => {
                        handleClickSchedulePosition(values, formikProps);
                      }}
                      getOptionSelected={(option, value) =>
                        option._id === value._id
                      }
                      getOptionLabel={(option) =>
                        option?.movie?.title + " " + option?.date ?? ""
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
                          {option.movie.title + " " + option.date}
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

                    <Grid xs={12} style={{ marginTop: 30, marginBottom: 30 }}>
                      {positionsSchedules.map((pos) => (
                        <>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={/* checked || */ pos.busy}
                                value={pos.row + pos.col}
                                formikProps={formikProps}
                                //onChange={handleChange}
                                /* 
                                value={formikProps.values.position} */
                                onChange={(event, values) => {
                                  handleChangePosition(
                                    event,
                                    values,
                                    formikProps
                                  );
                                }}
                                inputProps={{
                                  "aria-label": "primary checkbox",
                                }}
                              />
                            }
                            label={`${pos.row} ${pos.col}`}
                          />
                        </>
                      ))}
                    </Grid>

                    <Grid item xs={12}>
                      <Autocomplete
                        //required
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
                          option.card === option.card
                        }
                        getOptionLabel={(option) => option.card ?? ""}
                        helperText={formikProps.errors.pay_method ?? ""}
                        error={!!formikProps.errors.pay_method}
                        renderOption={(option, { selected }) => (
                          <>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              /* checked={selected} */
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
                    <Grid item xs={12} style={{ marginTop: 30 }}>
                      <Typography>PRICE</Typography>
                      <Input
                        //className={classes.input}
                        required
                        id="price"
                        disabled={true}
                        label={"Precio"}
                        formikProps={formikProps}
                        value={"500"}
                        placeholder="Precio"
                        /* onChange={(e) => {
                          formikProps.handleChange(e);
                        }} */
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
                onClick={() => {
                  handleSubmitForm(formikProps.values);
                }}
                /* disabled={loadingSubmit || !dirty} */
              >
                {selectedValue ? `Guardar` : `Vender`}
              </Button>
            </DialogActions>
          </>
        )}
      </Formik>

      <Divider />
    </Dialog>
  );
};

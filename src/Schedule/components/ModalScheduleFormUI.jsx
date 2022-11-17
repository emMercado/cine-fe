import React from "react";
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

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "500px",
    },
  },
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const ModalScheduleFormUI = (props) => {
  const classes = useStyles();
  const {
    open,
    onClose,
    selectedValue,
    populate,
    handleCreateSchedule,
    handleUpdateSchedule,
    moviesAvilable,
    roomsAvilable,
  } = props;

  const handleSubmitForm = async (values) => {
    const body = {
      movie: values.movie._id,
      date: values.date,
      room: values.room,
    };
    if (!body) {
      onClose();
      return;
    }
    await handleCreateSchedule(body);

    populate();
    onClose();
  };

  const handleSubmitUpdateForm = async (values) => {
    const body = {
      movie: values.movie._id,
      date: values.date,
      room: values.room,
    };
    if (!body) {
      onClose();
      return;
    }
    await handleUpdateSchedule(values.id, body);

    populate();
    onClose();
  };

  const {
    id = selectedValue ? selectedValue._id : undefined,
    movie = selectedValue ? selectedValue?.movie : "",
    date = selectedValue ? selectedValue.date : "",
    room = selectedValue ? selectedValue?._id : "",
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
          movie,
          date,
          room,
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
                  style={{
                    overflowWrap: "break-word",
                    paddingTop: 15,
                    paddingBottom: 20,
                    paddingLeft: 40,
                    paddingRight: 25,
                  }}
                >
                  <Grid container item xs={12} spacing={4}>
                    <Grid item xs={12}>
                      <Autocomplete
                        //required
                        formikProps={formikProps}
                        limitTags={1}
                        id="movie"
                        name="Pelicula"
                        options={moviesAvilable}
                        disableCloseOnSelect
                        value={formikProps?.values?.movie}
                        onChange={(_, values) => {
                          formikProps.setFieldValue("movie", values);
                        }}
                        getOptionSelected={(option, value) =>
                          option._id === value._id
                        }
                        getOptionLabel={(option) => option.title ?? ""}
                        helperText={formikProps.errors.movie ?? ""}
                        error={!!formikProps.errors.movie}
                        renderOption={(option, { selected }) => (
                          <>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              //className={classes.checkBoxMargin}
                              checked={selected}
                            />
                            {option.title}
                          </>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label={"Pelicula"}
                            helperText={formikProps.errors?.movie}
                            error={!!formikProps.errors.movie}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="date"
                        label="Horario"
                        formikProps={formikProps}
                        type="datetime-local"
                        value={formikProps.values.date.replace(":00.000Z", "")}
                        onChange={(e) => {
                          formikProps.setFieldValue("date", e.target.value);
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Autocomplete
                        //required
                        //className={classes.autocomplete}
                        formikProps={formikProps}
                        limitTags={1}
                        id="room"
                        name="sala"
                        options={roomsAvilable}
                        disableCloseOnSelect
                        value={formikProps?.values?.room}
                        onChange={(_, values) => {
                          formikProps.setFieldValue("room", values);
                        }}
                        getOptionSelected={(option, value) =>
                          option._id === value._id
                        }
                        getOptionLabel={(option) =>
                          option?.number?.toString() ?? ""
                        }
                        helperText={formikProps.errors.room ?? ""}
                        error={!!formikProps.errors.room}
                        renderOption={(option, { selected }) => (
                          <>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              //className={classes.checkBoxMargin}
                              checked={selected}
                            />
                            {option.number}
                          </>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label={"Sala"}
                            helperText={formikProps.errors?.room}
                            error={!!formikProps.errors.room}
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
                onClick={() =>
                  selectedValue
                    ? handleSubmitUpdateForm(formikProps.values)
                    : handleSubmitForm(formikProps.values)
                }
                /* disabled={loadingSubmit || !dirty} */
              >
                {selectedValue ? `Guardar` : `Agregar horario`}
              </Button>
            </DialogActions>
          </>
        )}
      </Formik>

      <Divider />
    </Dialog>
  );
};

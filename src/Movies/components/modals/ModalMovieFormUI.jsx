import React, { useState } from "react";
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
  Input,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { KeyboardDatePicker } from "@material-ui/pickers";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { DropzoneArea } from "material-ui-dropzone";
import Dropzone from "react-dropzone";
/* import { Typography } from "@material-ui/icons"; */

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "500px",
    },
  },
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const ModalMovieFormUI = (props) => {
  const classes = useStyles();
  const {
    open,
    onClose,
    selectedValue,
    selectedMovie,
    genresAvilable,
    protagonistsAvilable,
    languagesAvilable,
    handleCreateMovie,
    handleUpdateMovie,
    handleDeleteMovie,
  } = props;

  const handleSubmitMovie = async (values) => {
    const genresId = values.genres.map((g) => g._id);
    const protagonistsId = values.protagonists.map((p) => p._id);
    const languagesId = values.languages.map((l) => l._id);

    const body = {
      title: values.title,
      genres: genresId,
      direction: values.direction,
      protagonists: protagonistsId,
      producer: values.producer,
      date_premiere: values.date_premiere,
      duration: values.duration,
      languages: languagesId,
      img: values.img,
    };

    try {
      const isCreated = await handleCreateMovie(body);
      if (!isCreated) {
        return;
      }
      return isCreated;
    } catch (error) {
      console.error(error);
    }
  };

  const {
    id = undefined,
    title = "",
    genres = "",
    direction = "",
    protagonists = "",
    producer = "",
    date_premiere = "",
    duration = "",
    languages = "",
    img = "",
  } = selectedMovie || {};

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth="sm"
      className={classes.dialogRoot}
    >
      <DialogTitle>
        {selectedValue ? `Editar usuario` : `Crear usuario`}
      </DialogTitle>
      <Divider />
      <Formik
        enableReinitialize
        initialValues={{
          id,
          title,
          genres,
          direction,
          protagonists,
          producer,
          date_premiere,
          duration,
          languages,
          img,
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
                  xs={8}
                  style={{
                    overflowWrap: "break-word",
                    paddingTop: 15,
                    paddingBottom: 20,
                    paddingLeft: 40,
                    paddingRight: 25,
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Input
                        className={classes.input}
                        required
                        id="title"
                        label={"Titulo"}
                        formikProps={formikProps}
                        placeholder="Titulo"
                        onChange={(e) => {
                          formikProps.handleChange(e);
                        }}
                      />
                    </Grid>
                    <FormControl
                      variant="standard"
                      //className={classes.formControl}
                    >
                      <Autocomplete
                        //required
                        //className={classes.autocomplete}
                        multiple
                        limitTags={1}
                        id="genres"
                        name="Generos"
                        options={genresAvilable}
                        disableCloseOnSelect
                        values={formikProps.values.genres}
                        onChange={(_, values) => {
                          formikProps.setFieldValue("genres", values);
                        }}
                        getOptionSelected={(option, value) =>
                          option._id === value._id
                        }
                        getOptionLabel={(option) => option.name ?? ""}
                        helperText={formikProps.errors.genres ?? ""}
                        error={!!formikProps.errors.genres}
                        renderOption={(option, { selected }) => (
                          <>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              //className={classes.checkBoxMargin}
                              checked={selected}
                            />
                            {option.name}
                          </>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label={"Generos"}
                            /* helperText={formikProps.errors?.genres}
                            error={!!formikProps.errors.genres} */
                          />
                        )}
                      />
                    </FormControl>
                    <Grid item xs={12}>
                      <Input
                        className={classes.input}
                        required
                        id="direction"
                        label={"Direccion"}
                        formikProps={formikProps}
                        placeholder="Direccion"
                        onChange={(e) => {
                          formikProps.handleChange(e);
                        }}
                      />
                    </Grid>
                    <FormControl
                      variant="standard"
                      //className={classes.formControl}
                    >
                      <Autocomplete
                        //required
                        //className={classes.autocomplete}
                        multiple
                        limitTags={1}
                        id="protagonists"
                        name="Protagonistas"
                        options={protagonistsAvilable}
                        disableCloseOnSelect
                        values={formikProps.values.protagonists}
                        onChange={(_, values) => {
                          formikProps.setFieldValue("protagonists", values);
                        }}
                        getOptionSelected={(option, value) =>
                          option._id === value._id
                        }
                        getOptionLabel={(option) => option.name ?? ""}
                        helperText={formikProps.errors.protagonists ?? ""}
                        error={!!formikProps.errors.protagonists}
                        renderOption={(option, { selected }) => (
                          <>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              //className={classes.checkBoxMargin}
                              checked={selected}
                            />
                            {option.name}
                          </>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label={"Protagonistas"}
                            helperText={formikProps.errors?.protagonists}
                            error={!!formikProps.errors.protagonists}
                          />
                        )}
                      />
                    </FormControl>
                    <Grid item xs={12}>
                      <Input
                        className={classes.input}
                        required
                        id="producer"
                        label={"Productor"}
                        placeholder="Productor"
                        formikProps={formikProps}
                        onChange={(e) => {
                          formikProps.handleChange(e);
                          /* setDirty(true); */
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="date_premiere"
                        label="Fecha de estreno"
                        type="date"
                        formikProps={formikProps}
                        defaultValue={formikProps.values.date_premiere}
                        values={formikProps.values.date_premiere}
                        className={classes.textField}
                        onChange={(e) => {
                          formikProps.setFieldValue(
                            "date_premiere",
                            e.target.value
                          );
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        className={classes.input}
                        required
                        id="duration"
                        label={"Duracion"}
                        formikProps={formikProps}
                        placeholder="90"
                        onChange={(e) => {
                          formikProps.handleChange(e);
                        }}
                      />
                      <Typography>min</Typography>
                    </Grid>
                    <FormControl
                      variant="standard"
                      //className={classes.formControl}
                    >
                      <Autocomplete
                        //required
                        //className={classes.autocomplete}
                        multiple
                        limitTags={1}
                        id="language"
                        name="Lenguajes"
                        options={languagesAvilable}
                        disableCloseOnSelect
                        values={formikProps.values.languages}
                        onChange={(_, values) => {
                          formikProps.setFieldValue("languages", values);
                        }}
                        getOptionSelected={(option, value) =>
                          option._id === value._id
                        }
                        getOptionLabel={(option) => option.name ?? ""}
                        helperText={formikProps.errors.languages ?? ""}
                        error={!!formikProps.errors.languages}
                        renderOption={(option, { selected }) => (
                          <>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              //className={classes.checkBoxMargin}
                              checked={selected}
                            />
                            {option.name}
                          </>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label={"Lenguajes"}
                            helperText={formikProps.errors?.languages}
                            error={!!formikProps.errors.languages}
                          />
                        )}
                      />
                    </FormControl>
                    <Grid
                      item
                      xs={12}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderStyle: "dashed",
                        outline: "none",
                        padding: 20,
                        borderColor: "#d8d8d8",
                        backgroundColor: "#fafafa",
                        color: "#606060",
                      }}
                    >
                      <Dropzone
                        onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <section>
                            <div {...getRootProps()}>
                              <input {...getInputProps()} />
                              <p>Deja caer tu imagen aqui</p>
                            </div>
                          </section>
                        )}
                      </Dropzone>
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
                onClick={() => handleSubmitMovie(formikProps.values)}
                /* disabled={loadingSubmit || !dirty} */
              >
                {selectedMovie ? `Guardar` : `Registrar usuario`}
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
    </Dialog>
  );
};

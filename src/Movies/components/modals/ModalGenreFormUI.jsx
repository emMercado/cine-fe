import React, { useEffect } from "react";
import { Formik } from "formik";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Input,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "500px",
    },
  },
}));

export const ModalGenreFormUI = (props) => {
  const classes = useStyles();
  const { open, onClose, selectedValue, selectedMovie, handleModalClose } =
    props;

  const handleSubmitForm = (values) => {
    console.log(values);
  };

  const { id = undefined, name = "" } = selectedMovie || {};

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth="sm"
      className={classes.dialogRoot}
    >
      <DialogTitle>
        {selectedValue ? `Editar genero` : `Crear genero`}
      </DialogTitle>
      <Divider />
      <Formik
        enableReinitialize
        initialValues={{
          id,
          name,
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
                onSubmit={formikProps.handleSubmit}
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
                        id="name"
                        label={"Nombre genero"}
                        formikProps={formikProps}
                        placeholder="Accion"
                        onChange={(e) => {
                          formikProps.handleChange(e);
                          /* setDirty(true); */
                        }}
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
                {selectedMovie ? `Guardar` : `Registrar genero`}
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

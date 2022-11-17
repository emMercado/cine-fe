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
  Grid,
  makeStyles,
  TextField,
  Input,
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

export const ModalUserFormUI = (props) => {
  const classes = useStyles();
  const {
    open,
    onClose,
    selectedValue,
    populate,
    handleCreateUser,
    handleUpdateUser,
    rolesAvilable,
  } = props;

  const handleSubmitForm = async (values) => {
    const body = {
      username: values.username,
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confimgPasword,
      role: values.role,
    };
    if (!body) {
      onClose();
      return;
    }
    await handleCreateUser(body);
    populate();
    onClose();
  };

  const handleSubmitUpdateUser = async (values) => {
    const body = {
      username: values.username,
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confimgPasword,
      role: values.role,
    };
    if (!body) {
      onClose();
      return;
    }
    await handleUpdateUser(values.id, body);
    populate();
    onClose();
  };

  const {
    id = selectedValue ? selectedValue._id : undefined,
    username = selectedValue ? selectedValue.username : "",
    name = selectedValue ? selectedValue.name : "",
    password = selectedValue ? selectedValue.password : "",
    confirmPassword = selectedValue ? selectedValue.confirmPassword : "",
    email = selectedValue ? selectedValue.email : "",
    role = selectedValue ? selectedValue.role : "",
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
        {selectedValue ? `Editar Usuario` : `Crear Usuario`}
      </DialogTitle>

      <Formik
        enableReinitialize
        initialValues={{
          id,
          username,
          name,
          email,
          password,
          confirmPassword,
          role,
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
                        formikProps={formikProps}
                        id="username"
                        label={"Username"}
                        placeholder="Nombre de usuario"
                        value={formikProps.values.username}
                        onChange={(e) => {
                          formikProps.handleChange(e);
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Input
                        className={classes.input}
                        required
                        id="name"
                        label={"Nombre completo"}
                        formikProps={formikProps}
                        value={formikProps.values.name}
                        placeholder="Nombre Completo"
                        onChange={(e) => {
                          formikProps.handleChange(e);
                          /* setDirty(true); */
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Input
                        className={classes.input}
                        required
                        id="email"
                        label={"Email"}
                        value={formikProps.values.email}
                        formikProps={formikProps}
                        placeholder="Email"
                        onChange={(e) => {
                          formikProps.handleChange(e);
                          /* setDirty(true); */
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Input
                        className={classes.input}
                        required
                        disabled={formikProps.values.password ? true : false}
                        id="password"
                        label={"Contraseña"}
                        value={formikProps.values.password ? "**********" : ""}
                        placeholder="Contraseña"
                        formikProps={formikProps}
                        onChange={(e) => {
                          formikProps.handleChange(e);
                          /* setDirty(true); */
                        }}
                      />
                    </Grid>

                    {/* <Grid item xs={12}>
                      <Input
                        className={classes.input}
                        required
                        id="confirmPassword"
                        placeholder="Confirmar contraseña"
                        label={"Confirmar password"}
                        formikProps={formikProps}
                        onChange={(e) => {
                          formikProps.setFieldValue(e);
                          //setDirty(true);
                        }}
                      />
                    </Grid> */}

                    <Grid item xs={12}>
                      <Autocomplete
                        //required
                        //className={classes.autocomplete}
                        formikProps={formikProps}
                        limitTags={1}
                        id="role"
                        name="role"
                        options={rolesAvilable}
                        disableCloseOnSelect
                        value={formikProps.values.role}
                        onChange={(_, values) => {
                          formikProps.setFieldValue("role", values);
                        }}
                        getOptionSelected={(option, value) =>
                          option._id === value._id
                        }
                        getOptionLabel={(option) => option.name ?? ""}
                        helperText={formikProps.errors.role ?? ""}
                        error={!!formikProps.errors.role}
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
                            label={"Rol en la Empresa"}
                            helperText={formikProps.errors?.role}
                            error={!!formikProps.errors.role}
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
                onClick={
                  !selectedValue
                    ? () => handleSubmitForm(formikProps.values)
                    : () => handleSubmitUpdateUser(formikProps.values)
                }
              >
                {selectedValue ? `Guardar` : `Registrar usuario`}
              </Button>
            </DialogActions>
          </>
        )}
      </Formik>

      <Divider />
    </Dialog>
  );
};

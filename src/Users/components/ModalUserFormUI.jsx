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
  Input,
  Modal,
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
  
  } = props;
  //TODO: SACAR EL DATO HARDCODEADO Y COLOCAR EL VERDADERO VALOR OBJECTID
  const [age, setAge] = useState("");


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmitForm = async (values) => {
    console.log(values);
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

  const [payMethodAvilable, setPayMethodAvilable] = useState([
    { _id: "637473577460d3e37a258719", role: "Admin" },
    { _id: "637473577460d3e37a258720", role: "Empleado" },
  ]);


  const {
    
    username = selectedValue ? selectedValue.username : "",
    name = selectedValue ? selectedValue.name : "",
    password=selectedValue ? selectedValue.password : "",
    confirmPassword=selectedValue ? selectedValue.confirmPassword : "",
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
          username,
          name,
          email,
          password,
          confirmPassword,
          role
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
                      id="username"
                      label={"Username"}
                      formikProps={formikProps}
                      placeholder="Usuario"
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
                        id="password"
                        label={"Contraseña"}
                        placeholder="Contraseña"
                        formikProps={formikProps}
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
                        id="confirmPassword"
                        placeholder="Confirmar contraseña"
                        label={"Confirmar password"}
                        formikProps={formikProps}
                        onChange={(e) => {
                          formikProps.setFieldValue(e);
                          /* setDirty(true); */
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Autocomplete
                        //required
                        //className={classes.autocomplete}
                        formikProps={formikProps}
                        limitTags={1}
                        id="role"
                        name="role"
                        options={payMethodAvilable}
                        disableCloseOnSelect
                        value={formikProps.values.role}
                        onChange={(_, values) => {
                          formikProps.setFieldValue("role", values);
                        }}
                        getOptionSelected={(option, value) =>
                          option._id === value._id
                        }
                        getOptionLabel={(option) => option.role ?? ""}
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
                            {option.role}
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
                onClick={() => handleSubmitForm(formikProps.values) /*&& onClose()*/}
                /* disabled={loadingSubmit || !dirty} */
              >
                {selectedValue ? `Guardar` : `Registrar usuario`}
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

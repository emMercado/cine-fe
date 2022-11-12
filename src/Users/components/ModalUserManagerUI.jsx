import React, { useState } from "react";
import { Formik } from "formik";
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  Divider,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import styles from "../styles/ModalUserManagerStyles";

const ModalUserManagerUI = (props) => {
  const { handleDialogClose, selectedUser, createUser } = props;
  const classes = styles();
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmitForm = async (values) => {
    //probar si se necesita async await
    await createUser(values);
  }

  const {
    id = undefined,
    //username = selectedUser ? selectedUser.username : "",
    username = "",
    name = "",
    email = "",
    role = "",
  } = selectedUser || {};

  const Data = ({ formikProps }) => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Input
          className={classes.input}
          required
          id="username"
          label={"Username"}
          formikProps={formikProps}
          placeholder="c123456"
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
          id="name"
          label={"Nombre completo"}
          formikProps={formikProps}
          placeholder="Pepe Lopez"
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
          placeholder="example@mail.com"
          onChange={(e) => {
            formikProps.handleChange(e);
            /* setDirty(true); */
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {/*TODO: SELECT CON ROLES */}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
          >
            {/*   <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem> */}
            <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
            <MenuItem value={"EMPLOYEE"}>EMPLEADO</MenuItem>
          </Select>
        </FormControl>

        {/* <Input
          type=select
                    className={classes.input}
                    required
                    id="role"
                    label={getText('USERS_ADD_FORM_USERNAME')}
                    formikProps={formikProps}
                    placeholder="u123456"
                    onChange={(e) => {
                        formikProps.handleChange(e);
                        setDirty(true);
                    }}
                /> */}
      </Grid>
    </Grid>
  );

  return (
    <Formik
      enableReinitialize
      initialValues={{
        id,
        username,
        password: "",
        confirmPassword: "",
        name,
        email,
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
                {Data({ formikProps })}
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
              onClick={() => handleDialogClose()}
            >
              Cerrar
            </Button>
            <Button
              className={classes.button}
              type="submit"
              disableElevation
              variant="contained"
              color="primary"
              onClick={()=> handleSubmitForm(formikProps.values) }
              /* disabled={loadingSubmit || !dirty} */
            >
              {selectedUser ? `Guardar` : `Registrar usuario`}
              {loadingSubmit && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </Button>
          </DialogActions>
        </>
      )}
    </Formik>
  );
};

export default ModalUserManagerUI;

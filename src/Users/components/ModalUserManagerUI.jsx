import React, { useState } from 'react'
import { Formik } from 'formik';
import { Button, CircularProgress, DialogActions, DialogContent, Divider, Grid, Input } from '@material-ui/core';
import styles from '../styles/ModalUserManagerStyles';

const ModalUserManagerUI = (props) => {
    const { handleDialogClose, selectedUser } = props;
    const classes = styles();
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const {
        id = undefined,
        username = '',
        name = '',
        email = '',
        role = '',
    } = selectedUser || {};

    const Data = ({ formikProps }) => (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Input
                    className={classes.input}
                    required
                    id="username"
                    label={'Username'}
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
                    label={'Nombre completo'}
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
                    label={'Contraseña'}
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
                    label={'Confirmar password'}
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
                    label={'Email'}
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
                {/* <Input
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

    )

    return (
        <Formik
            enableReinitialize
            initialValues={{
                id,
                username,
                password: '',
                confirmPassword: '',
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
                        <form noValidate
                            autoComplete="off"
                            align="center"
                        /* onSubmit={formikProps.handleSubmit} */
                        >
                            <Grid
                                item
                                xs={8}
                                style={{
                                    overflowWrap: 'break-word',
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
                        /* onClick={formikProps.handleSubmit} */
                        /* disabled={loadingSubmit || !dirty} */
                        >
                            {selectedUser
                                ? `Guardar`
                                : `Registrar usuario`}
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
    )
}

export default ModalUserManagerUI

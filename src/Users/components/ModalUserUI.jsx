import { Dialog, DialogTitle, Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import ModalUserManagerPage from '../pages/ModalUserManagerPage'

const useStyles = makeStyles((theme) => ({
    dialogRoot: {
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '500px',
        },
    },
}));

export const ModalUserUI = (props) => {
    const classes = useStyles();
    const { open, onClose, selectedValue } = props

    return (
        <Dialog
            onClose={onClose}
            open={open}
            fullWidth
            maxWidth="sm"
            className={classes.dialogRoot}
        >
            <DialogTitle>
                {selectedValue
                    ? `Editar usuario`
                    : `Crear usuario`}
            </DialogTitle>
            <Divider />
            <ModalUserManagerPage
                selectedUser={selectedValue}
                handleDialogClose={onClose}
            />
        </Dialog>
    )
}

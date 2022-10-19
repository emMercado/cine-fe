import React from 'react'
import ModalUserManagerUI from '../components/ModalUserManagerUI'

const ModalUserManagerPage = (props) => {

    const { handleDialogClose, selectedUser } = props;

    //TODO: HACER LA LLAMADA A LA API USER
    const handleSubmit = async (values) => {
        /* try {
            if (values.id) {
                await update(`/api/user/?id=${values.id}`, values);
                handleDialogClose(true);
            } else {
                await post('/api/user/register', values);
                handleDialogClose(true);
            }
        } catch (error) {
            logError(error);
        } */
    };

    return (
        <ModalUserManagerUI
            selectedUser={selectedUser}
            handleDialogClose={handleDialogClose}
            handleSubmitForm={handleSubmit}
        />
    )
}

export default ModalUserManagerPage

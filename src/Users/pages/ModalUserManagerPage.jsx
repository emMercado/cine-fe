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

    const getUsers = async () => {
        const data = await fetch( 'http://localhost:3000/user/');
        return data
    }

    const getUserById = async (id) => {
        const data = await fetch( 'localhost:3000/api/user/', id);
        return data
    }

    const updateUser = async (id, body) => {
        const data = await fetch( 'localhost:3000/api/user/', id, body);
        return data
    }

    const createUser = async (id, body) => {
        const data = await fetch( 'localhost:3000/api/user/', id, body);
        return data
    }

    return (
        <ModalUserManagerUI
            selectedUser={selectedUser}
            handleDialogClose={handleDialogClose}
            handleSubmitForm={handleSubmit}
            createUser={createUser}
        />
    )
}

export default ModalUserManagerPage

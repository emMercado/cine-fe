import React, { useState } from 'react'
import MaterialTable from '@material-table/core';
import { Button, Grid } from '@material-ui/core';
import { ModalUserUI } from './ModalUserUI';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';


const UserManagerUI = () => {

    const [openModal, setOpenModal] = useState(false)
    const [selectedValue, setSelectedValue] = useState({});
    const [users, setUsers] = useState([
        { username: 'z124257', name: 'Pepe', role: "admin" },
        { username: 'z123456', name: 'Baran', role: "gerent" },
    ]);

    const col = [
        { title: 'Name', field: 'name' },
        { title: 'username', field: 'username' },
        { title: 'Role', field: 'role' },
    ]

    const handleOpenModal = (rowData) => {
        setSelectedValue(rowData);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                    <Button
                        startIcon={<PersonAddRoundedIcon />}
                        variant="contained"
                        disableElevation
                        style={{
                            marginRight: 10,
                            backgroundColor: '#70a954',
                            color: '#fff',
                        }}
                        onClick={() => handleOpenModal()}
                    >Nuevo usuario</Button>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <MaterialTable
                        title="Simple Action Preview"
                        columns={col}
                        data={users}
                        actions={[
                            {
                                icon: 'save',
                                tooltip: 'Save User',
                                onClick: (event, rowData) => alert("You saved " + rowData.name)
                            }
                        ]}
                    />
                </Grid>
            </Grid>
            <ModalUserUI
                open={openModal}
                onClose={handleCloseModal}
                selectedValue={selectedValue}
            />
        </ >
    )
}

export default UserManagerUI;
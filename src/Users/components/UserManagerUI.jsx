import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import { Button, Grid } from "@material-ui/core";
import { tableIcons } from "../../Shared/components/tableIcons";
import { ModalUserFormUI } from "./ModalUserFormUI";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";

const UserManagerUI = (props) => {
  const {
    
    handleGetUsers,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
    
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [usersAvilable, setUsersAvilable] = useState([]);
  

 /* const [users, setUsers] = useState([
    { username: "ejemplo1234", name: "ejem", role: "admin" },
    { username: "ejemplo12345", name: "ejem", role: "empleado" },
  ]);*/

  const col = [
    { title: "Nombre", field: "name" }
  ];

  const populateUsers = async () => {
    
    const { data } = await handleGetUsers();
    console.log(data)
    setUsersAvilable(data);
  };

  useEffect(() => {
    
    populateUsers();
    
  }, []);

  

  const handleOpenModal = (rowData) => {
    setSelectedValue(rowData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickDeleteUser = async (userId) => {
    await handleDeleteUser(userId);
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
                backgroundColor: "#70a954",
                color: "#fff",
              }}
              onClick={() => handleOpenModal()}
            >
              Registrar Usuario
            </Button>
          </Grid>
          <Grid item xs={12} sm={10}>
            <MaterialTable
              title={"Usuarios"}
              icons={tableIcons}
              columns={col}
              data={usersAvilable}
              options={{
                actionsColumnIndex: -1,
                emptyRowsWhenPaging: false,
                headerStyle: { fontSize: 15 },
                rowStyle: { fontSize: 15 },
                sorting: true,
                thirdSortClick: false,
                paginationType: "stepper",
                pageSizeOptions: [10, 25, 50, 100, 250, 500],
                showTitle: true,
                search: true,
                showEmptyDataSourceMessage: false,
              }}
              actions={[
                {
                  icon: Edit,
                  tooltip: "Editar Usuario",
                  onClick: (event, rowData) => {
                    handleOpenModal(rowData);
                  },
                },
                {
                  icon: Delete,
                  tooltip: "Eliminar Usuario",
                  onClick: (event, rowData) => {
                     handleClickDeleteUser(rowData._id);
                  },
                },
              ]}
              
            />
          </Grid>
        
      </Grid>    
      
      <ModalUserFormUI
        /* handleOpenModal={handleOpenModal} */
        open={openModal}
        onClose={handleCloseModal}
        selectedValue={selectedValue}
        populate={populateUsers}
        handleCreateUser={handleCreateUser}
        handleUpdateUser={handleUpdateUser}
       
      />
    </>
  );
};

export default UserManagerUI;

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
    handleGetRoles,
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [usersAvilable, setUsersAvilable] = useState([]);
  const [rolesAvilable, setrolesAvilable] = useState([]);

  const col = [
    { title: "Nombre", field: "name" },
    { title: "Username", field: "username" },
    { title: "Email", field: "email" },
    { title: "Rol", field: "role.name" },
  ];

  const populateUsers = async () => {
    const { data } = await handleGetUsers();
    setUsersAvilable(data);
  };

  const populateRoles = async () => {
    const { data } = await handleGetRoles();
    setrolesAvilable(data);
  };

  useEffect(() => {
    populateUsers();
    populateRoles();
  }, []);

  useEffect(() => {
    populateUsers();
    populateRoles();
  }, [handleDeleteUser]);

  const handleOpenModal = (rowData) => {
    setSelectedValue(rowData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickDeleteUser = async (userId) => {
    await handleDeleteUser(userId);
    alert("se elimino usuario");
  };

  return (
    <>
      <Grid container xs={12} spacing={10} style={{padding: '30px'}}>
        <Grid item xs={12}>
          <Button
            startIcon={<PersonAddRoundedIcon />}
            variant="contained"
            disableElevation
            style={{
              marginBottom: 20,
              backgroundColor: "#70a954",
              color: "#fff",
            }}
            onClick={() => handleOpenModal()}
          >
            Registrar Usuario
          </Button>
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
        open={openModal}
        onClose={handleCloseModal}
        selectedValue={selectedValue}
        rolesAvilable={rolesAvilable}
        populate={populateUsers}
        handleCreateUser={handleCreateUser}
        handleUpdateUser={handleUpdateUser}
      />
    </>
  );
};

export default UserManagerUI;

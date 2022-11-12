import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import { Button, Grid } from "@material-ui/core";
import { ModalUserUI } from "./ModalUserUI";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

const UserManagerUI = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const [users, setUsers] = useState([
    { username: "z124257", name: "Pepe", role: "admin" },
    { username: "z123456", name: "Baran", role: "gerent" },
  ]);

  const col = [
    { title: "Name", field: "name" },
    { title: "username", field: "username" },
    { title: "Role", field: "role" },
  ];

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
              backgroundColor: "#70a954",
              color: "#fff",
            }}
            onClick={() => handleOpenModal()}
          >
            Nuevo usuario
          </Button>
        </Grid>
        <Grid item xs={12} sm={10}>
          <MaterialTable
            title="Users"
            columns={col}
            data={users}
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
                /* disabled: !fullAccess, */
                tooltip: "Editar usuario",
                onClick: (event, rowData) => {
                  /*  handleClickEditGroup(rowData); */
                },
              },
              {
                icon: Delete,
                tooltip: "Eliminar usuario",
                onClick: (event, rowData) =>
                  alert("Eliminar usuario " + rowData.name),
              },
            ]}
            /* editable={{
                        onRowDelete: (oldData) =>
                            new Promise(async (resolve) => {
                                const user = await handleUserDelete(oldData.id);
                                user && setData(data.filter((g) => g.id !== oldData.id));
                                resolve();
                            }),
                    }} */
          />
        </Grid>
      </Grid>
      <ModalUserUI
        open={openModal}
        onClose={handleCloseModal}
        selectedValue={selectedValue}
      />
    </>
  );
};

export default UserManagerUI;

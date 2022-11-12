import MaterialTable from "@material-table/core";
import { Button, Grid, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { GenresTab } from "./tabs/GenresTab";
import { ProtagonistsTab } from "./tabs/ProtagonistsTab";
import { MoviesTab } from "./tabs/MoviesTab";
import { LanguagesTab } from "./tabs/LanguagesTab";
/* import styles from '../styles/ModalUserManagerStyles'; */

const MoviesManagerUI = (props) => {
  /* const { getMovies } = props; */
  /* const classes = styles(); */
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const [tabSelected, setTabSelected] = useState(0);
  const [titleState, setTitleState] = useState("");
  const [movies, setMovies] = useState([
    { username: "z124257", title: "Saw I", role: "admin" },
    { username: "z123456", title: "Saw II", role: "gerent" },
  ]);

  const handleOpenModal = (rowData) => {
    setSelectedValue(rowData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onChangeTabSelected = (event, value) => {
    setTabSelected(value);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} /* sm={8} */ container>
          <Tabs
            variant="fullWidth"
            value={tabSelected}
            onChange={onChangeTabSelected}
            /* TabIndicatorProps={{
              style: {
                display: "none",
              },
            }} */
          >
            <Tab
              disableRipple
              /* className={
                parseInt(tabSelected) === 0
                  ? classes.tabSelected
                  : classes.tabNotSelected
              } */
              label={"MOVIES"}
            />
            <Tab
              disableRipple
              /* className={
                parseInt(tabSelected) === 1
                  ? classes.tabSelected
                  : classes.tabNotSelected
              } */
              label={"GENRES"}
            />
            <Tab
              disableRipple
              /* className={
                parseInt(tabSelected) === 2
                  ? classes.tabSelected
                  : classes.tabNotSelected
              } */
              label={"PROTAGONISTS"}
            />
            <Tab
              disableRipple
              /* className={
                parseInt(tabSelected) === 3
                  ? classes.tabSelected
                  : classes.tabNotSelected
              } */
              label={"LANGUAGES"}
            />
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={8}>
          {
            <MoviesTab
              tabSelected={tabSelected}
              movies={movies}
              handleOpenModal={handleOpenModal}
              open={openModal}
              onClose={handleCloseModal}
            />
          }
          {<GenresTab tabSelected={tabSelected} />}
          {<ProtagonistsTab tabSelected={tabSelected} />}
          {<LanguagesTab tabSelected={tabSelected} />}

          {/* 
          <MaterialTable
            title={titleState}
            columns={col}
            data={movies}
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
                //disabled: !fullAccess,
                tooltip: "Editar usuario",
                onClick: (event, rowData) => {
                  //  handleClickEditGroup(rowData); 
                },
              },
              {
                icon: Delete,
                tooltip: "Eliminar usuario",
                onClick: (event, rowData) =>
                  alert("Eliminar usuario " + rowData.name),
              },
            ]}
          />
           */}
        </Grid>
      </Grid>
    </>
  );
};
export default MoviesManagerUI;

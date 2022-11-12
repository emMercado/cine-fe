import React, { useState } from "react";
import { Grid, Tab, Tabs } from "@material-ui/core";
import { ProtagonistsTab } from "./tabs/ProtagonistsTab";
import { MoviesTab } from "./tabs/MoviesTab";
import { LanguagesTab } from "./tabs/LanguagesTab";
import { GenreManagerPage } from "../pages/GenreManagerPage";
import { ProtagonistManagerPage } from "../pages/ProtagonistManagerPage";
import { LanguageManagerPage } from "../pages/LanguageManagerPage";
/* import styles from '../styles/ModalUserManagerStyles'; */

const MoviesManagerUI = (props) => {
  /* const { getMovies } = props; */
  /* const classes = styles(); */
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const [tabSelected, setTabSelected] = useState(0);

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
          <MoviesTab
            tabSelected={tabSelected}
            handleOpenModal={handleOpenModal}
            open={openModal}
            onClose={handleCloseModal}
          />

          <GenreManagerPage
            tabSelected={tabSelected}
            handleOpenModal={handleOpenModal}
            open={openModal}
            onClose={handleCloseModal}
          />

          <ProtagonistManagerPage
            tabSelected={tabSelected}
            handleOpenModal={handleOpenModal}
            open={openModal}
            onClose={handleCloseModal}
          />

          <LanguageManagerPage
            tabSelected={tabSelected}
            handleOpenModal={handleOpenModal}
            open={openModal}
            onClose={handleCloseModal}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default MoviesManagerUI;

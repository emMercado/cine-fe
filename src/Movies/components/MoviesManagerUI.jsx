import React, { useEffect, useState } from "react";
import { Grid, Tab, Tabs } from "@material-ui/core";
import { MoviesTab } from "./tabs/MoviesTab";
import { GenreManagerPage } from "../pages/GenreManagerPage";
import { ProtagonistManagerPage } from "../pages/ProtagonistManagerPage";
import { LanguageManagerPage } from "../pages/LanguageManagerPage";
/* import styles from '../styles/ModalUserManagerStyles'; */

const MoviesManagerUI = (props) => {
  const {
    handleGetProtagonists,
    handleGetLanguages,
    handleGetGenres,
    handleGetMovies,
    handleCreateMovie,
    handleUpdateMovie,
    handleDeleteMovie,
  } = props;
  /* const classes = styles(); */
  const [openModal, setOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const [tabSelected, setTabSelected] = useState(0);

  const [genresAvilable, setGenresAvilable] = useState([]);
  const [languagesAvilable, setLanguagesAvilable] = useState([]);
  const [protagonistsAvilable, setProtagonistsAvilable] = useState([]);
  const [moviesAvilable, setMoviesAvilable] = useState([]);

  const populateProtagonists = async () => {
    const { data } = await handleGetProtagonists();
    setProtagonistsAvilable(data);
  };

  const populateGenres = async () => {
    const { data } = await handleGetGenres();
    setGenresAvilable(data);
  };

  const populateLaguages = async () => {
    const { data } = await handleGetLanguages();
    setLanguagesAvilable(data);
  };

  const populateMovies = async () => {
    const { data } = await handleGetMovies();
    setMoviesAvilable(data);
  };

  useEffect(() => {
    populateProtagonists();
    populateGenres();
    populateLaguages();
    populateMovies();
  }, []);

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
            genresAvilable={genresAvilable}
            protagonistsAvilable={protagonistsAvilable}
            languagesAvilable={languagesAvilable}
            setMoviesAvilable={setMoviesAvilable}
            moviesAvilable={moviesAvilable}
            populate={populateMovies}
            handleCreateMovie={handleCreateMovie}
            handleUpdateMovie={handleUpdateMovie}
            handleDeleteMovie={handleDeleteMovie}
          />

          <GenreManagerPage
            tabSelected={tabSelected}
            genresAvilable={genresAvilable}
            setGenresAvilable={setGenresAvilable}
            populate={populateGenres}
          />

          <ProtagonistManagerPage
            tabSelected={tabSelected}
            protagonistsAvilable={protagonistsAvilable}
            setProtagonistsAvilable={setProtagonistsAvilable}
            populate={populateProtagonists}
          />

          <LanguageManagerPage
            tabSelected={tabSelected}
            languagesAvilable={languagesAvilable}
            setLanguagesAvilable={setLanguagesAvilable}
            populate={populateLaguages}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default MoviesManagerUI;

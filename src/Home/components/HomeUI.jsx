import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonGroup, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const images = [
  {
    url: "https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2021/08/Las-franquicias-cinematogra%CC%81ficas.jpg?resize=750%2C374&ssl=1",
    title: "BOLETERIA",
    width: "100%",
    href: "/ticket/manager",
  },
  {
    url: "https://www.izquierdadiario.es/local/cache-vignettes/L800xH450/8748686a3885bc1ea6d4aa33970e34-41041.jpg?1668583200",
    title: "PELICULAS",
    width: "50%",
    href: "/movie/manager",
  },
  {
    url: "https://noticias.uai.edu.ar/media/99747/2900-1.jpg",
    title: "HORARIOS",
    width: "50%",
    href: "/schedule/manager",
  },
  {
    url: "https://i.blogs.es/da62f5/dolby-cinema-2/1366_2000.jpg",
    title: "SALAS",
    width: "50%",
    href: "/room/manager",
  },
  {
    url: "https://i0.wp.com/cinespacio24.mx/wp-content/uploads/2017/04/f.jpg?resize=577%2C324&ssl=1",
    title: "USUARIOS",
    width: "50%",
    href: "/user/manager",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const HomeUI = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root}>
        {images.map((image) => (
          <>
            <ButtonBase
              focusRipple
              key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
              href={image.href}
            >
              <Grid
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </ButtonBase>
          </>
        ))}
      </Grid>
    </>
  );
};
export default HomeUI;

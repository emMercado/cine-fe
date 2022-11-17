import { makeStyles } from "@material-ui/core/styles";
import { AuthStatus } from "../navigation/AuthStatus";
import AppBar from "./AppBar/components/AppBar";
import MyDrawer from "./MyDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginTop: 70,
  },
}));

const LayoutContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AuthStatus /> */}
      <AppBar />
      <MyDrawer children={children} />
    </div>
  );
};

export default LayoutContainer;

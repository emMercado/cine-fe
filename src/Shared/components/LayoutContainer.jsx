import { makeStyles } from '@material-ui/core/styles';
import AppBar from './AppBar/components/AppBar';
import MyDrawer from './MyDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginTop: 70,
  },
}));

const LayoutContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <MyDrawer children={children} />
    </div>
  );
};

export default LayoutContainer;

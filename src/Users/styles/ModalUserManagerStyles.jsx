import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  paper: {
    minWidth: '50%',
    borderRadius: '5px',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    margin: theme.spacing(1),
    width: '97%',
  },
  button: {
    marginTop: theme.spacing(2),
  },
  buttonChange: {
    display: 'flex',
  },
  buttonCancelContainer: {
    paddingTop: `0px !important`,
    display: 'flex',
  },
  input: {
    minWidth: '100%',
    width: '370px',
  },
  inputLabel: {
    paddingLeft: theme.spacing(2),
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  tab: {
    width: '100%',
    marginBottom: '2rem',
  },
  formControl: {
    width: '100%',
  },
}));

export default styles;

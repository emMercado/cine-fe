import { createTheme } from '@material-ui/core/styles';
import { teal, deepPurple } from '@material-ui/core/colors';



const lighTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: deepPurple[500],
      main: deepPurple[600],
      dark: deepPurple[700],
    },
    secondary: {
      light: teal[500],
      main: teal[700],
      dark: teal[800],
    },
  },
});

export default lighTheme;

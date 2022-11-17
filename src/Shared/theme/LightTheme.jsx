import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal, deepPurple } from '@material-ui/core/colors';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';



const theme = createTheme({
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
    background: {
      
      paper: teal[800],
      default: deepPurple[600],
    }
  },
});

export default theme;

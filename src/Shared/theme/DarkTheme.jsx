import { createTheme } from '@material-ui/core/styles';

import { deepPurple, teal } from '@material-ui/core/colors';

const darkTheme = createTheme({
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

export default darkTheme;

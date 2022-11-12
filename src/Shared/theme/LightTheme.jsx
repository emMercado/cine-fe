import { createTheme } from '@material-ui/core/styles';

const lighTheme = createTheme({
  palette: {
    primary: {
      dark: '#1a5785',
      main: '#3d7fea', // Original: 267dbf   4a8390   #30336b 3c6382
      light: '#5197cb',
    },
    secondary: {
      light: '#ab003c',
      main: '#f50057',
      dark: '#f73378',
    },
  },
});

export default lighTheme;

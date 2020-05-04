/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multi-assign */
import { createMuiTheme } from '@material-ui/core';
import { lime, brown } from '@material-ui/core/colors';

const win = window as any;

const defaultTheme = createMuiTheme({
  palette: {
    primary: lime,
    secondary: brown,
  },
});

const theme = (win._theme = win._theme || defaultTheme);

export default theme;

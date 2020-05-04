import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing, zIndex }: Theme) =>
  createStyles({
    root: {
      zIndex: zIndex.drawer + 1,
    },
    brand: {
      color: 'white',
    },
    pad: {
      flex: 1,
    },
    nav: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(0, 2),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Header' });

export default useStyles;

import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'App' });

export default useStyles;

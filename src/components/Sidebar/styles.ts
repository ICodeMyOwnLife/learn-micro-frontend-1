import { makeStyles, createStyles } from '@material-ui/core';

const styles = () =>
  createStyles({
    root: {},
    container: {
      width: 240,
      overflowY: 'auto',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Sidebar' });

export default useStyles;

import { makeStyles, createStyles } from 'sp-ops-react-ui';

const styles = () =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'App' });

export default useStyles;

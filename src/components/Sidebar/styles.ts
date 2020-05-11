import { makeStyles, createStyles } from 'sp-ops-react-ui';

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

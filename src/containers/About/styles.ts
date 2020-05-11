import { makeStyles, createStyles } from 'sp-ops-react-ui';

const styles = () =>
  createStyles({
    root: {},
    imgContainer: {
      display: `flex`,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: 200,
    },
    video: {
      maxWidth: '100%',
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'About' });

export default useStyles;

import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      padding: spacing(3),
      paddingLeft: `${240 + spacing(3)}px`,
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'AppLayout' });

export default useStyles;

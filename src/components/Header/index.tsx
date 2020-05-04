import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  AppBarProps,
} from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';

export const HeaderComponent: FC<HeaderProps> = ({
  className,
  position = 'sticky',
  ...props
}) => {
  const classes = useStyles();

  return (
    <AppBar
      {...props}
      className={clsx(className, classes.root)}
      position={position}
    >
      <Toolbar>
        <Typography className={classes.brand} variant="h6">
          <Link component={NavLink} to="/">
            Micro-Frontend {process.env.REACT_APP_MF_CODE}
          </Link>
        </Typography>
        <div className={classes.pad} />
        <nav className={classes.nav}>
          <Link color="secondary" component={NavLink} to="/login">
            Login
          </Link>
          <Link color="secondary" component={NavLink} to="/products">
            Products
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

const Header = memo(HeaderComponent);
Header.displayName = 'Header';
export default Header;

export interface HeaderProps extends AppBarProps {}

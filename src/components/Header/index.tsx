import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Link, AppBarProps } from 'sp-ops-react-ui';
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
        <h4 className={classes.brand}>
          <Link component={NavLink} to="/">
            Micro-Frontend {process.env.REACT_APP_MF_CODE}
          </Link>
        </h4>
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

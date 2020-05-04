import React, { FC, memo, ReactNode } from 'react';
import useStyles from './styles';

export const AppLayoutComponent: FC<AppLayoutProps> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

const AppLayout = memo(AppLayoutComponent);
AppLayout.displayName = 'AppLayout';
export default AppLayout;

export interface AppLayoutProps {
  children?: ReactNode;
}

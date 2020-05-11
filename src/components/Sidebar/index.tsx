import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, Toolbar, List, ListItem } from 'sp-ops-react-ui';
import routes from 'routes';
import { joinUrlPaths } from 'utils/routing';
import useStyles from './styles';

export const SidebarComponent: FC<SidebarProps> = ({ basePath }) => {
  const classes = useStyles();

  return (
    <Drawer className={classes.root} variant="permanent">
      <Toolbar />
      <div className={classes.container}>
        <List component="nav">
          {Object.entries(routes).map(([name, { path }]) => (
            <ListItem
              button
              component={NavLink}
              key={name}
              to={`/${joinUrlPaths(basePath, path)}`}
            >
              {name}
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

const Sidebar = memo(SidebarComponent);
Sidebar.displayName = 'Sidebar';
export default Sidebar;

export interface SidebarProps {
  basePath: string;
}

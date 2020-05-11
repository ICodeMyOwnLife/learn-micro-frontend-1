import React, { FC, memo, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import Header from 'components/Header';
import AppLayout from 'components/AppLayout';
import Sidebar from 'components/Sidebar';
import routes from 'routes';
import { joinUrlPaths } from 'utils/routing';
import useStyles from './styles';

export const AppComponent: FC<AppProps> = ({
  isMicroFrontend,
  microFrontendPath,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Header style={{ display: isMicroFrontend ? 'none' : 'flex' }} />
        <Sidebar basePath={microFrontendPath} />
        <AppLayout>
          <h3>Micro-Frontend {process.env.REACT_APP_MF_CODE}</h3>

          <Suspense fallback="Loading Child">
            {Object.entries(routes).map(
              ([name, { factory, path, ...props }]) => (
                <Route
                  {...props}
                  component={lazy(factory)}
                  key={name}
                  path={`/${joinUrlPaths(microFrontendPath, path)}`}
                />
              ),
            )}
          </Suspense>
        </AppLayout>
      </div>
    </div>
  );
};

const App = memo(AppComponent);
App.displayName = 'App';
export default App;

export interface AppProps {
  isMicroFrontend: boolean;
  microFrontendPath: string;
}

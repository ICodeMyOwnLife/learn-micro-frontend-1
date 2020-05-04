import React, { FC, memo, Suspense, lazy } from 'react';
import { History } from 'history';
import { Router, Route } from 'react-router';
import { MicroFrontendAppProps } from 'cb-react-micro-frontend';
import Header from 'components/Header';
import {
  ThemeProvider,
  CssBaseline,
  Typography,
  StylesProvider,
} from '@material-ui/core';
import theme from 'theme';
import AppLayout from 'components/AppLayout';
import Sidebar from 'components/Sidebar';
import routes from 'routes';
import { joinUrlPaths } from 'utils/routing';
import jssInstance, { generateClassName } from 'jssInstance';
import useStyles from './styles';

console.log(theme);

export const AppComponent: FC<MicroFrontendAppProps> = ({
  history,
  isMicroFrontend,
  microFrontendPath,
}) => {
  const classes = useStyles();

  const content = (
    <div>
      <Sidebar basePath={microFrontendPath} />
      <AppLayout>
        <Typography color="primary" variant="h3">
          Micro-Frontend {process.env.REACT_APP_MF_CODE}
        </Typography>

        <Suspense fallback="Loading Child">
          {Object.entries(routes).map(([name, { factory, path, ...props }]) => (
            <Route
              {...props}
              component={lazy(factory)}
              key={name}
              path={`/${joinUrlPaths(microFrontendPath, path)}`}
            />
          ))}
        </Suspense>
      </AppLayout>
    </div>
  );

  return (
    <div className={classes.root}>
      <StylesProvider generateClassName={generateClassName} jss={jssInstance}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router history={history}>
            <div>
              <Header style={{ display: isMicroFrontend ? 'none' : 'flex' }} />
              {content}
            </div>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};

const App = memo(AppComponent);
App.displayName = 'App';
export default App;

export interface AppProps {
  history: History;
}

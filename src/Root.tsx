import React, { FC, memo } from 'react';
import { Router } from 'react-router';
import { MicroFrontendAppProps } from 'cb-react-micro-frontend';
import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import theme from 'theme';
import jssInstance, { generateClassName, sheetManager } from 'jssInstance';
import App from 'App';

export const RootComponent: FC<MicroFrontendAppProps> = ({
  history,
  isMicroFrontend,
  microFrontendPath,
}) => (
  <StylesProvider
    generateClassName={generateClassName}
    jss={jssInstance}
    sheetsManager={sheetManager}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <App
          isMicroFrontend={isMicroFrontend}
          microFrontendPath={microFrontendPath}
        />
      </Router>
    </ThemeProvider>
  </StylesProvider>
);

const Root = memo(RootComponent);
Root.displayName = 'Root';
export default Root;

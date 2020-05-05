import React, { FC, memo } from 'react';
import { MicroFrontendAppProps } from 'cb-react-micro-frontend';
import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import theme from 'theme';
import jssInstance, { generateClassName, sheetManager } from 'jssInstance';
import App from 'App';

export const RootComponent: FC<MicroFrontendAppProps> = ({
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
      <App
        isMicroFrontend={isMicroFrontend}
        microFrontendPath={microFrontendPath}
      />
    </ThemeProvider>
  </StylesProvider>
);

const Root = memo(RootComponent);
Root.displayName = 'Root';
export default Root;

import React, { FC, memo } from 'react';
import {
  MicroFrontendAppProps,
  MicroFrontendChild,
} from 'sp-ops-micro-frontend';
import App from 'App';

export const RootComponent: FC<MicroFrontendAppProps> = ({
  isMicroFrontend,
  microFrontendPath,
}) => (
  <MicroFrontendChild isMicroFrontend={isMicroFrontend}>
    <App
      isMicroFrontend={isMicroFrontend}
      microFrontendPath={microFrontendPath}
    />
  </MicroFrontendChild>
);

const Root = memo(RootComponent);
Root.displayName = 'Root';
export default Root;

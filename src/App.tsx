import React, { FC, memo, Suspense, lazy, Fragment } from 'react';
import { History } from 'history';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { MicroFrontendAppProps } from 'cb-react-micro-frontend';
import { createRoutes } from 'utils/routing';

const routes = createRoutes({
  Home: {
    path: '/home',
    factory: () => import('containers/Home'),
  },
  Contact: {
    path: '/contact',
    factory: () => import('containers/Contact'),
  },
  About: {
    path: '/about',
    factory: () => import('containers/About'),
  },
  Login: {
    path: '/login',
    factory: () => import('containers/Login'),
  },
  Products: {
    path: '/products',
    factory: () => import('containers/ProductList'),
  },
});

export const joinUrlPaths = (...paths: string[]) =>
  paths
    .map(path => path.match(/\/?(.+[^/])\/?/)?.[1] ?? '')
    .filter(Boolean)
    .join('/');

export const AppComponent: FC<MicroFrontendAppProps> = ({
  history,
  isMicroFrontend,
  microFrontendPath,
}) => {
  const content = (
    <>
      <div>Micro-Frontend 1</div>
      <nav>
        {Object.entries(routes).map(([name, { path }]) => (
          <Fragment key={name}>
            <Link to={`/${joinUrlPaths(microFrontendPath, path)}`}>{name}</Link>{' '}
            |{' '}
          </Fragment>
        ))}
      </nav>
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
    </>
  );

  return (
    <Router history={history}>
      <div>
        {!isMicroFrontend && <h2>HEADER</h2>}
        {content}
      </div>
    </Router>
  );
};

const App = memo(AppComponent);
App.displayName = 'App';
export default App;

export interface AppProps {
  history: History;
}

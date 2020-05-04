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
  Colors: {
    path: '/colors',
    factory: () => import('containers/Colors'),
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

export default routes;

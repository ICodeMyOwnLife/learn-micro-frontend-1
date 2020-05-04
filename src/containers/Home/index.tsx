import React, { FC, memo } from 'react';
import { RouteComponentProps } from 'react-router';

export const HomeComponent: FC<RouteComponentProps> = ({ location }) => (
  <div>
    <h2>Home {process.env.REACT_APP_MF_CODE}</h2>
    <p>{location.pathname}</p>
  </div>
);

const Home = memo(HomeComponent);
Home.displayName = 'Home';
export default Home;

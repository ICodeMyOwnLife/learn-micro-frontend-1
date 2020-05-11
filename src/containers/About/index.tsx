/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC, memo, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import aboutTxtSrc from './about.txt';
import aboutImgSrc from './about.png';
import aboutVidSrc from './about.mp4';
import useStyles from './styles';

export const AboutComponent: FC<RouteComponentProps> = ({ location }) => {
  const classes = useStyles();
  const [about, setAbout] = useState('');
  useEffect(() => {
    fetch(aboutTxtSrc)
      .then(res => res.text())
      .then(setAbout);
  }, []);

  return (
    <div className={classes.root}>
      <h2>About {process.env.REACT_APP_MF_CODE}</h2>
      <p>{location.pathname}</p>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={aboutImgSrc} alt="about" />
      </div>
      <p>{about}</p>
      <video autoPlay className={classes.video} src={aboutVidSrc} />
    </div>
  );
};

const About = memo(AboutComponent);
About.displayName = 'About';
export default About;

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multi-assign */
import { create } from 'jss';
import { jssPreset, createGenerateClassName } from '@material-ui/core';

const win = window as any;

const jssInstance = (win._jss = win._jss || create(jssPreset()));

export const generateClassName = (win._generateClassName =
  win._generateClassName || createGenerateClassName());

export default jssInstance;

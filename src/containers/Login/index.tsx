import React, { FC, memo } from 'react';
import clsx from 'clsx';
import { useLoginForm } from './utils';
import classes from './styles.module.scss';

export const LoginComponent: FC = () => {
  const { handleFormSubmit, register, token } = useLoginForm();

  return (
    <div className={classes.root}>
      <h3>LOGIN {process.env.REACT_APP_MF_CODE}</h3>
      <form onSubmit={handleFormSubmit}>
        <div className={classes.formGroup}>
          <label className={classes.inputLabel} htmlFor="username">
            Username
          </label>
          <input
            className={classes.inputControl}
            type="text"
            name="username"
            ref={register}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.inputLabel} htmlFor="password">
            Password
          </label>
          <input
            className={classes.inputControl}
            type="password"
            name="password"
            ref={register}
          />
        </div>
        <div className={clsx(classes.formGroup, classes.actionGroup)}>
          <button className={classes.button} type="submit">
            Submit
          </button>
        </div>
      </form>

      {!!token && <p>{token}</p>}
    </div>
  );
};

const Login = memo(LoginComponent);
Login.displayName = 'Login';
export default Login;

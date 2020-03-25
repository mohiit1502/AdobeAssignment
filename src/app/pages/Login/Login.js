import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';

const Login = props => {
  return (
    <div className={styles.root}>
      <p>This is the login module</p>
    </div>
  );
};

Login.defaultProps = {

};

Login.propTypes = {

};

export default Login;
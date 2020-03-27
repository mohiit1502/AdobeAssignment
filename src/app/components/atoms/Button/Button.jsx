import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as fwIcons from '@fortawesome/free-solid-svg-icons'
import './Button.component.scss'

const Button = props => {
  return (
    <button
      className={`c-Button ${props.classes}`}
      type={props.buttonType}
      name={props.buttonName}
      value={props.buttonValue}
      disabled={props.buttonDisabled}
      autoFocus={props.buttonAutoFocus}
      onClick={props.onClickHandler}>
        {props.buttonIcon && <FontAwesomeIcon icon={fwIcons[props.buttonIcon]} />}
        {props.buttonText}
    </button>
  );
};

Button.defaultProps = {

};

Button.propTypes = {

};

export default Button;
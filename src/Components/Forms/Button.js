import React from 'react';
import Styles from './Button.module.css';

function Button({children, ...props}) {
  return (
    <button className={Styles.button} {...props}>{children}</button>
  )
}

export default Button;

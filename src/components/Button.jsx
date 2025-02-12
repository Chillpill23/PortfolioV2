import React from 'react'
import '../css/Button.css'

function Button(props) {
  return (
    <button role='button' className={props.class} aria-label={props.name}>
      {props.icon && (<span>{props.icon}</span>)}
      <span>{props.name}</span>
    </button>
  )
}

export default Button
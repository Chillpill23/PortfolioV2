import React from 'react'
import '../css/Button.css'

function Button(props) {
  return (
    <button className={props.class} aria-label={props.name}>
      {props.icon && (<div></div>)}
      <span>{props.name}</span>
    </button>
  )
}

export default Button
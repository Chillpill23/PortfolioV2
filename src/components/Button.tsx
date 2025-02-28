import { ReactNode } from 'react';
import { Scroll } from '../utils/Scroll'

interface ButtonProps{
  btnStyle:string;
  name:string;
  url:string;
  icon:ReactNode;
}

function Button({btnStyle, name, url, icon}:ButtonProps) {
  return (
    <button role='button' 
      className={btnStyle} 
      aria-label={name} 
      onClick={(e) => {
        e.preventDefault();
        Scroll({ anchor: url })
      }}
    >
      {icon && (<span>{icon}</span>)}
      <span>{name}</span>
    </button>
  )
}

export default Button
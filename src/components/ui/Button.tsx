import { ReactNode,memo } from 'react';
import { Scroll } from '../../utils/Scroll'

interface ButtonProps{
  btnStyle:string;
  name:string;
  url:string;
  icon:ReactNode;
  pos?:string;
}

const Button = memo(({btnStyle, name, url, icon, pos}:ButtonProps) => {
  return (
    <button role='button' 
      className={btnStyle} 
      aria-label={name} 
      onClick={(e) => {
        e.preventDefault();
        Scroll({ anchor: url })
      }}
    >
      {pos === 'right' ? (
        <>
          <span>{name}</span>
          {icon && (<span>{icon}</span>)}
        </>
      ) : (
        <>
          {icon && (<span>{icon}</span>)}
          <span>{name}</span>
        </>
      )}

    </button>
  )
});

export default Button
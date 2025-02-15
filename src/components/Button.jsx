import '../css/Button.css'
import { Scroll } from '../utils/Scroll'

function Button(props) {
  return (
    <button role='button' 
      className={props.class} 
      aria-label={props.name} 
      onClick={(e) => {
        e.preventDefault();
        Scroll(props.url)
      }}
    >
      {props.icon && (<span>{props.icon}</span>)}
      <span>{props.name}</span>
    </button>
  )
}

export default Button
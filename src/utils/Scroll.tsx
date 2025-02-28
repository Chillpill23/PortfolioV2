interface ScrollProps {
  anchor:string;
} 

export const Scroll = ({anchor}:ScrollProps) => {
  const id = `${anchor}`;
  const element = document.getElementById(id);

  if(element){
    element.scrollIntoView({
      behavior:"smooth",
      block:'start'
    })
  } else {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
}

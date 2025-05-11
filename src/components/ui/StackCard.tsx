import { FC } from "react";

interface StackCardProps {
  name: string;
  logo: string;
}

const StackCard: FC<StackCardProps> = ({name, logo}: StackCardProps) => {
  return (
    <div className='stack__card'>
      <img src={logo} alt={`${name}-logo`} className="stack__logo"/>
      {name}
    </div>
  )
}

export default StackCard
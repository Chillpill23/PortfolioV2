import { FC } from "react";

interface StackCardProps {
  tech: string;
}

const StackCard: FC<StackCardProps> =({tech}: StackCardProps) => {
  return (
    <span className='stack__card'>{tech}</span>
  )
}

export default StackCard
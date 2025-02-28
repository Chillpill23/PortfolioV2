interface StackCardProps {
  tech: string;
}

function StackCard({tech}: StackCardProps) {
  return (
    <span className='stack__card'>{tech}</span>
  )
}

export default StackCard
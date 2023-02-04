import { Container } from './styles';

export function Input({ label, icon:Icon, title,...rest}) {
  return (
    <Container>
      {/* { Icon && <Icon size={20}/>} */}

      <label htmlFor={label}>
       {title} 
      </label> 
      
      <input {...rest} />
      
    </Container>
  )
}
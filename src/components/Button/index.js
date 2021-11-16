import React from 'react'
import { ButtonContainer, Text } from './styles'

function Button({children, pdf, isCustom, text, ...props}) {

   return(
      <ButtonContainer className={isCustom ? 'isCustom' : '' || pdf ? 'pdf' : ''} {...props}>
         {children}
         <Text>{text}</Text>
      </ButtonContainer>
   )
}

export default Button
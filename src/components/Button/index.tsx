import React from 'react'
import { ButtonType } from '../../@types/types'
import { ButtonContainer, Text } from './styles'

interface ButtonProps extends ButtonType {
   x?: number;
   bordrad?: number;
   margB?: number;
}


function Button(props: ButtonProps) {

   return(
      <ButtonContainer 
         onClick={props.onClick && props.onClick}
         className={
            props.isCustom ? 'isCustom' : '' || 
            props.pdf ? 'pdf' : '' ||
            props.to_register ? 'to_register' : '' ||
            props.fa_eye_button ? 'fa_eye_button' : ''
         }
         x={props.x}
         bordrad={props.bordrad}
         margB={props.margB}
      >
         {props.children}
         <Text>{props.text}</Text>
      </ButtonContainer>
   )
}

export default Button
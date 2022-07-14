import React, { InputHTMLAttributes } from 'react'
import { InputContainer, InputLabelContainer, Label } from './styles'
import {Separator} from '..'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   x?: number;
   label: string;
   placeHolder: string
}


function Input(props: InputProps) {

   return(
      <InputLabelContainer x={props.x}>
         <InputContainer 
            placeholder={props.placeHolder} 
            {...props}
         />
         <Label>{props.label}</Label>
         <Separator y={21}/>
      </InputLabelContainer>
   )
}

export default Input
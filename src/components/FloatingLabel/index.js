import React from 'react'
import { Label } from './styles'

function FloatingLabel({msg, ...props}) {

   return (
         <Label {...props}>{msg}</Label>
   )
}

export default FloatingLabel
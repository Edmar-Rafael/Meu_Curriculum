import styled from "styled-components";
import { Colors } from '../../resources'
   
export const InputContainer = styled.input`
   padding-left: 15px;
   font-size: 16px;
   width: ${({width}) => width || 68.5}px;
   max-width: 99%;
   height: 48px;
   background-color: ${Colors.background.secondary};
   color: white;
   border: ${Colors.border};
   border-radius: 3.5px;
   font-weight: 400;

   
   &::placeholder{
      color: transparent;
   }

   &:focus + label, :not(:placeholder-shown) + label {
      font-size: 16px;
      font-weight: 700;
      color: ${Colors.purple.primary};
      transform: translate3d(-6px, -60px, 0) scale(.82) ;
   }


   &:hover, :focus{
      border-color: ${Colors.purple.secondary};
      outline: none;
   }

   @media(max-width: 800px) {
         width: 285px;
   }

   @media(max-width: 500px) {
      width:${({width}) => width}px;
   }
`
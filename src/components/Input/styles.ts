import styled from "styled-components";
import { Colors } from '../../resources'

type Props = {
   x?: number
}

export const InputLabelContainer = styled.div<Props>`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: ${({x}) => x || 70}px;
   max-width: 99%;

   @media(max-width: 800px) {
         width: 285px;
   }

   @media(max-width: 500px) {
      width:${({x}) => x}px;
   }
`
   
export const InputContainer = styled.input`
   padding-left: 15px;
   font-size: 16px;
   width: 100%;
   height: 48px;
   background-color: ${Colors.background.secondary};
   color: white;
   border: ${Colors.border};
   border-radius: 3.5px;
   font-weight: 400;
   overflow: hidden;

   
   &::placeholder{
      color: ${Colors.label};
      padding: 0 0 0 5px;
   }

   &:focus + label, :not(:placeholder-shown) + label {
      width: fit-content;
      padding: 0 5px;
      font-size: 16px;
      font-weight: 700;
      color: ${Colors.purple.primary};
      transform: translate(10px, -60px) scale(.82);
   }


   &:hover, :focus{
      border-color: ${Colors.purple.secondary};
      outline: none;
   }

   @media(max-width: 800px) {
   }

   @media(max-width: 500px) {
   }
`

export const Label = styled.label`
   padding: 0 5px 0 0;
   font-size: 1.05rem;
   color: ${Colors.label};
   font-weight: 100;
   font-family: 'Noto-sans';
   transform-origin: 0 0;
   transform: translate(20px, -38px);
   transition: all .3s;
   background-color: ${Colors.background.secondary};
   z-index: 9;
   pointer-events: none;
`
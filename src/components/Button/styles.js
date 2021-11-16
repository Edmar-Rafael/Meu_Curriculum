import styled from 'styled-components'
import { Colors } from '../../resources'

export const ButtonContainer = styled.button`
   border: none;
   width: ${({width}) => width || 144}px;
   max-width: 97%;
   height: ${({height}) => height || 36}px;
   background-color:  ${Colors.purple.primary};
   color: ${({color}) => color || 'black'};
   border-radius: ${({bordrad}) => bordrad || 5}px;
   margin-bottom: ${({margB}) => margB}px;


   &.isCustom{
      border: 1px solid rgba(255,255,255, 0.12);
      background-color: transparent;
      color: ${Colors.purple.primary};
   }

   &.pdf{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 43px;
      border-radius: 4px;
   }
   

   &:hover {
      filter: brightness(0.9);
   }

   transition: filter 0.2s;
   cursor: pointer;

   @media(max-width: 800px) {
      border-radius: 99px;
      width: 90px;
   }
`

export const Text = styled.span`
   font-weight: 700;
`
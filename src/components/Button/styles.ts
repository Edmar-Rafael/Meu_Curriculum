import styled from 'styled-components'
import { Colors } from '../../resources'

export type ButtonContainerType = {
   x?: number;
   bordrad?: number;
   margB?: number;
}

export const ButtonContainer = styled.button<ButtonContainerType>`
   border: none;
   width: ${({x}) => x || 144}px;
   max-width: 99%;
   height: 36px;
   background-color:  ${Colors.purple.primary};
   color: black;
   border-radius: ${({bordrad}) => bordrad || 5}px;
   margin-bottom: ${({margB}) => margB}px;
   transition: filter 0.2s;
   cursor: pointer;

   &:hover {
      filter: brightness(0.9);
   }

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

   &.to_register{
      width: fit-content;
      height: fit-content;
      color: ${Colors.font.white};
      background-color: ${Colors.background.secondary};
   }

   &.fa_eye_button{
      width: fit-content;
      height: fit-content;
      color: ${Colors.font.white};
      background-color: ${Colors.background.secondary};
      transform: translate(130px, -12px);
      position: absolute;

      @media(max-width: 800px) {
         transform: translate(100px, 8px);
      }

      @media(max-width: 800px) {
         transform: translate(110px, 8px);
      }
   }

   @media(max-width: 800px) {
      border-radius: 99px;
      width: 90px;
   }
`

export const Text = styled.span`
   font-weight: 700;
`
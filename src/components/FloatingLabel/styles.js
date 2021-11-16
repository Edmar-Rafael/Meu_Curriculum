import styled from 'styled-components'
import { Colors } from '../../resources'

export const Label = styled.label`
   font-size: 18px;
   color: ${Colors.label};
   font-weight: 100;
   font-family: 'Noto-sans';
   width: ${({width}) => width || 31}px;
   max-width: 99%;
   margin-left: 15px;
   text-align: center;
   transform-origin: 0 0;
   transform: translateY(-38px);
   transition: all .3s;
   background-color: ${Colors.background.secondary};
   z-index: 9;
   pointer-events: none;
`
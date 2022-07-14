import styled from 'styled-components'

type Props = {
   margB?: number
}

export const ToRegisterContainer = styled.div<Props>`
   font-size: 14px;
   color: #fff;
   margin-bottom: ${({margB}) => margB || ''}px;
   cursor: pointer;
   transition: all 0.2s;

   &:hover {
      filter: brightness(0.9);
   }
`
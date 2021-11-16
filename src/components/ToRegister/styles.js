import styled from 'styled-components'

export const Container = styled.div`
   font-size: 14px;
   color: #fff;
   cursor: pointer;
   margin-bottom: ${({margB}) => margB || ''}px;

   &:hover {
      filter: brightness(0.9);
   }

   transition: filter 0.2s;
`
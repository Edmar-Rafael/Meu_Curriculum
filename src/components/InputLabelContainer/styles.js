import styled from 'styled-components'

export const InputLabelBox = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: ${({width}) => width || 70}px;
   max-width: 99%;


   @media(max-width: 800px) {
         width: 285px;
   }

   @media(max-width: 500px) {
      width:${({width}) => width}px;
   }
`

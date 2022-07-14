import styled from 'styled-components'

type FlexType = {
   flexDir?: string
}

export const ContainerBody = styled.div<FlexType>`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: ${({flexDir}) => flexDir};
   align-items: center;
   justify-content: center;

   @media(max-width: 800px) {
      padding-bottom: 4px;
   }

   @media(max-width: 500px) {
      padding-bottom:11px;
   }
`
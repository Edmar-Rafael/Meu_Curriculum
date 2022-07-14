import styled from 'styled-components'
import { Colors } from '../../resources'

export const NaviBarContainer = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 10;
   width: 100%;
   background-color: ${Colors.background.primary};
   box-shadow: ${Colors.boxShadow};
`

export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const LogoContainer = styled.image`
   display: flex;
   justify-content: center;
   width: 100%;
`

export const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   padding: 4px
`
import ReactModal from 'react-modal'
import styled from 'styled-components'

export const ModalContainer = styled(ReactModal)`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding: 12px;
   position: relative;
   border: 1px solid #888;
   border-radius: 3px;
   top: 20%;
   left: 50%;
   width: 360px;
   background: #eee;
   transform: translate(-50%, -50%);
`

export const ModalAlert = styled.span`
   display: flex;
   align-items: flex-end;
   color: #000;
   font-size: 22px;
`

import React from 'react'
import { Button } from '..'
import { ModalAlert, ModalContainer } from './styles'

function Modal({modal, setModal, msg}) {

   return(
      <ModalContainer 
         isOpen={modal} 
         onRequestClose={() => setModal(false)} 
         style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)'
            }}}>
         <ModalAlert >
            {msg}
         </ModalAlert>
         <Button text={'OK'} onClick={() => setModal(false)} pdf/>
      </ModalContainer>
   )
}

export default Modal
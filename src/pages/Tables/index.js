import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pdfIcon from '../../assets/images/pdfIcon.svg'
import { useHistory } from 'react-router'
import { Button, Container, Separator, ToRegister } from '../../components'
import { EMAIL } from '../../config'
import { 
   ButtonContainer, 
   Img, 
   MaterialTable, 
   NameContainer, 
   OptionsContainer, 
   PlusButtonContainer, 
   PlusContainer, 
   TablesContainer, 
   TablesHeader, 
   UserNameContainer } from './styles'
   
function Tables() {
   const history = useHistory()


   return (
      <Container flexDir={'column'}>
         <TablesContainer>
            <TablesHeader>
               <NameContainer>NAME</NameContainer>
               <OptionsContainer>OPÇÔES</OptionsContainer>
               <UserNameContainer>{EMAIL}</UserNameContainer>
               <ButtonContainer>
                  <Button  text='EDITAR' width={90} />
                  <Separator/>
                  <Button pdf>
                     <Img src={pdfIcon} />
                  </Button>
               </ButtonContainer>
            </TablesHeader>
            <MaterialTable />
            <ToRegister/>
         </TablesContainer>
         <PlusContainer>
            <PlusButtonContainer>
               <Button onClick={() => history.push('/edition')} width={35} bordrad={99}>
                  <FontAwesomeIcon icon={faPlus}/>
               </Button>
            </PlusButtonContainer>
         </PlusContainer>
      </Container>
   )
}

export default Tables
import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import pdfIcon from '../../assets/images/pdfIcon.svg'
import { useHistory } from 'react-router'
import { Button, Container, Icons, Separator, ToRegister } from '../../components'
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
   UserNameContainer 
} from './styles'

   
function Tables() {
   const history = useHistory()

   return ( 
      <Container flexDir='column'>
         <TablesContainer>
            <TablesHeader>
               <NameContainer>NAME</NameContainer>
               <OptionsContainer>OPÇÔES</OptionsContainer>
               <UserNameContainer>{EMAIL}</UserNameContainer>
               <ButtonContainer>
                  <Button  text={'EDITAR'} x={90} />
                  <Separator/>
                  <Button pdf>
                     <Img src={pdfIcon} />
                  </Button>
               </ButtonContainer>
            </TablesHeader>
            <MaterialTable />
            <Button text={'Registrar-se'} to_register/>
         </TablesContainer>
         <PlusContainer>
            <PlusButtonContainer>
               <Button 
                  onClick={() => history.push('/edition')} 
                  x={35} 
                  bordrad={99}
               >
                  <Icons faIcon={faPlus} fa_plus/>
               </Button>
            </PlusButtonContainer>
         </PlusContainer>
      </Container>
   )
}

export default Tables
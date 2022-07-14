import React, { FormEvent, useState } from "react";
import { 
   Input, 
   Button, 
   ToRegister, 
   Container, 
   Separator 
} from '../../components'
import { 
   FloatingLabelTextArea, 
   FormContainer, 
   GridContainer, 
   TextArea, 
   TextAreaContainer 
} from "./styles";
import { PersonalDataType } from "../../@types/types";
import { getAddress } from "../../services/address";


function Edition() {
   const [personalData, setPersonalData] = useState<PersonalDataType>({
      fullName: '',
      birthday: '',
      zipCode: '',
      street: '',
      neighborhood: '',
      city: '',
      state: '',
      complement: '',
      email: '',
      phone: '',
      textArea: ''
   })

   function handleOnSubmit(event: FormEvent) {
      event.preventDefault()
   }

   function handleEditionInputs(event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) {
      const { id, value } = event.target
      setPersonalData({ ...personalData, [id]: value })
   }

   async function handleGetAddress(zip: string | undefined) {
      const { data } = await getAddress(zip)
      setPersonalData({
         street: data.street,
         neighborhood: data.neighborhood,
         city: data.city,
         state: data.state
      })
   }

   function handleClear() {
      setPersonalData({
         fullName: '',
         birthday: '',
         zipCode: '',
         street: '',
         neighborhood: '',
         city: '',
         state: '',
         complement: '',
         email: '',
         phone: '',
         textArea: ''
      })
   }

   
   return (
      <Container>
         <FormContainer onSubmit={handleOnSubmit}>
            <GridContainer>
               <Input
                  onChange={handleEditionInputs}
                  type='text'
                  x={524}
                  id='fullName'
                  label={'Nome Completo'}
                  placeHolder='Ex: João ...'
                  value={personalData.fullName}
               />
               <Input
                  onChange={handleEditionInputs}
                  x={181}
                  id='birthday'
                  label={'Data de Nascimento'}
                  placeHolder='00/00/0000'
                  value={personalData.birthday}
               />
               <Input
                  onBlur={()=> handleGetAddress(personalData.zipCode)}
                  onChange={handleEditionInputs}
                  x={149}
                  id='zipCode'
                  label={'CEP'}
                  placeHolder='CEP' 
                  value={personalData.zipCode}
               />
               <Input
                  onChange={handleEditionInputs}
                  x={320}
                  id='street'
                  label={'Logradouro'}
                  placeHolder='Logradouro'
                  value={personalData.street}
               />
               <Input
                  onChange={handleEditionInputs}
                  x={196}
                  id='neighborhood'
                  label={'Bairro'}
                  placeHolder='Bairro'
                  value={personalData.neighborhood}
               />
               <Input
                  onChange={handleEditionInputs}
                  x={320}
                  id='city'
                  label={'Cidade'}
                  placeHolder='Cidade'
                  value={personalData.city}
               />
               <Input
                  onChange={handleEditionInputs}
                  x={66}
                  id='state'
                  label={'UF'}
                  placeHolder='UF'
                  value={personalData.state}
               />
               <Input
                  onChange={handleEditionInputs}
                  x={293}
                  id='complement'
                  label={'Complemento'}
                  placeHolder='Complemento'
                  value={personalData.complement}
               />
               <Input
                  onChange={handleEditionInputs}
                  x={473}
                  id='email'
                  label={'E-mail'}
                  placeHolder='E-mail'
                  value={personalData.email}
               />
               <Input
                  onChange={handleEditionInputs}
                  x={233}
                  id='phone'
                  label={'Telefone'}
                  placeHolder='Telefone'
                  value={personalData.phone}
               />
               <TextAreaContainer>
                  <TextArea 
                     onChange={handleEditionInputs} 
                     id='textArea'
                     placeholder='Experiência' 
                     value={personalData.textArea}
                  />
                  <FloatingLabelTextArea>Experiência</FloatingLabelTextArea>
                  <Separator y={21}/>
               </TextAreaContainer>
               <Button
                  onClick={handleClear} 
                  margB={25}
                  x={144} 
                  isCustom 
                  text='LIMPAR' />
               <ToRegister margB={25} />
               <Button
                  margB={5}
                  x={144}
                  text='SALVAR'
                  type='submit'
               />
            </GridContainer>
         </FormContainer>
      </Container>
   )
}

export default Edition
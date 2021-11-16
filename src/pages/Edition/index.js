import React, { useState } from "react";
import { Input, Button, ToRegister, Container, InputLabelContainer, FloatingLabel, Separator } from '../../components'
import { FloatingLabelTextArea, FormContainer, GridContainer, TextArea, TextAreaContainer } from "./styles";

function Edition() {
   const [personalData, setPersonalData] = useState({
      fullName: '',
      birthday: '',
      zipCode: '',
      publicPlace: '',
      neighborhood: '',
      city: '',
      federalUnity: '',
      complement: '',
      email: '',
      phone: '',
      textArea: ''
   })

   function handleOnSubmit(event) {
      event.preventDefault()
   }

   function handleEditionInputs(event) {
      const { id, value } = event.target
      setPersonalData({ ...personalData, [id]: value })
   }

   function handleClear() {
      setPersonalData({
         fullName: '',
         birthday: '',
         zipCode: '',
         publicPlace: '',
         neighborhood: '',
         city: '',
         federalUnity: '',
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
               <InputLabelContainer width={530}>
                  <Input
                     type='text'
                     width={509}
                     onChange={handleEditionInputs}
                     id='fullName'
                     placeholder='Nome Completo'
                     value={personalData.fullName}
                  />
                  <FloatingLabel msg={'Nome Completo'} width={121}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={187}>
                  <Input
                     width={166}
                     onChange={handleEditionInputs}
                     id='birthday'
                     placeholder='Data de nascimento'
                     value={personalData.birthday}
                  />
                  <FloatingLabel msg={'Data de nascimento'} width={144}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={156}>
                  <Input
                     width={134}
                     onChange={handleEditionInputs}
                     id='zipCode'
                     placeholder='CEP'
                     value={personalData.zipCode}
                  />
                  <FloatingLabel msg={'CEP'} width={41}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={326}>
                  <Input
                     width={305}
                     onChange={handleEditionInputs}
                     id='publicPlace'
                     placeholder='Logradouro'
                     value={personalData.publicPlace}
                  />
                  <FloatingLabel msg={'Logradouro'} width={93}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={202}>
                  <Input
                     width={181}
                     onChange={handleEditionInputs}
                     id='neighborhood'
                     placeholder='Bairro'
                     value={personalData.neighborhood}
                  />
                  <FloatingLabel msg={'Bairro'} width={56}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={326}>
                  <Input
                     width={305}
                     onChange={handleEditionInputs}
                     id='city'
                     placeholder='Cidade'
                     value={personalData.city}
                  />
                  <FloatingLabel msg={'Cidade'} width={59}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={72}>
                  <Input
                     width={51}
                     onChange={handleEditionInputs}
                     id='federalUnity'
                     placeholder='UF'
                     value={personalData.federalUnity}
                  />
                  <FloatingLabel msg={'UF'}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={299}>
                  <Input
                     width={278}
                     onChange={handleEditionInputs}
                     id='complement'
                     placeholder='Complemento'
                     value={personalData.complement}
                  />
                  <FloatingLabel msg={'Complemento'} width={107}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={479}>
                  <Input
                     width={458}
                     onChange={handleEditionInputs}
                     id='email'
                     placeholder='E-mail'
                     value={personalData.email}
                  />
                  <FloatingLabel msg={'E-mail'} width={56}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={239}>
                  <Input
                     width={218}
                     onChange={handleEditionInputs}
                     id='phone'
                     placeholder='Telefone'
                     value={personalData.phone}
                  />
                  <FloatingLabel msg={'Telefone'} width={70}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <TextAreaContainer>
                  <TextArea 
                     id='textArea' 
                     onChange={handleEditionInputs} 
                     placeholder='Experiência' 
                     value={personalData.textArea}
                  />
                  <FloatingLabelTextArea>Experiência</FloatingLabelTextArea>
                  <Separator height={21}/>
               </TextAreaContainer>
               <Button
                  margB={25} 
                  onClick={handleClear} 
                  width={144} 
                  isCustom 
                  text='LIMPAR' />
               <ToRegister margB={25} />
               <Button
                  margB={5}
                  width={144}
                  text='SALVAR'
                  type='submit'
               />
            </GridContainer>
         </FormContainer>
      </Container>
   )
}

export default Edition
import React, { useState } from 'react'
import { EMAIL, JWT, PASSWORD } from '../../config'
import { useAuth } from '../../hooks/useAuth'
import Logo from '../../icons/Logo'
import { 
   Button, 
   Container, 
   FloatingLabel, 
   Input, 
   InputLabelContainer, 
   Modal, 
   Separator, 
   ToRegister } from '../../components'
import { 
   HomeContainer,
   HomeFormContainer,
   HomeSVG,
   ScreenRow,
   } from './styles'

function Home() {
   const [modal, setModal] = useState(false)
   const [user, setUser] = useState({
      id: 1,
      token: JWT,
      name: '',
      password: ''
   })
   const {logIn} = useAuth()
   
   
   function handleSubmit(event) {
      event.preventDefault()
      if(user.name !== EMAIL || user.password !== PASSWORD) {
         setModal(true)
      } else {
         logIn(user) 
      }     
   }

   function handleChange(event) {
      const {id, value} = event.target
      setUser({...user, [id]: value})
   }


   return(
      <Container>
         <Modal 
            modal={modal} 
            setModal={setModal}
            msg={'Erro! Email ou senha invalidos.'}/>
         <HomeContainer >
            <HomeSVG>
               <Logo y={510} x={510} />
            </HomeSVG>
            <Separator />
            <HomeFormContainer onSubmit={handleSubmit}>
               <InputLabelContainer width={325}>
                  <Input 
                     width={303}
                     onChange={handleChange}
                     id='name'
                     placeholder='E-mail' 
                     value= {user.name}
                  />
                  <FloatingLabel msg={'E-mail'} width={54}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <InputLabelContainer width={325}>
                  <Input 
                     width={303}
                     onChange={handleChange}
                     id='password'
                     type='password'
                     placeholder='Senha' 
                     value={user.password}
                  />
                  <FloatingLabel msg={'Senha'} width={50}/>
                  <Separator height={21}/>
               </InputLabelContainer>
               <Separator height={11}/>
               <ScreenRow>
                  <Button                     
                     width={334}
                     type='submit' 
                     text='ENTRAR'
                  />
                  <Separator height={28}/>
                  <ToRegister/>
               </ScreenRow>
            </HomeFormContainer>
         </HomeContainer>
      </Container>
   )
}

export default Home
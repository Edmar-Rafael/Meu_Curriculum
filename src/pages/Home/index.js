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
   MaskButton,
   ScreenRow,
   } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Colors } from '../../resources'

function Home() {
   const [maskType, setMaskType] = useState(true)
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
      <>
      <Container>
        
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
                    type={maskType ? 'password' : ''}
                    placeholder='Senha' 
                    value={user.password}
                 />
                 <FloatingLabel msg={'Senha'} width={50}/>
                 <Separator height={21}/>
                 <MaskButton type='button' onClick={() => setMaskType(!maskType)}>
                    <FontAwesomeIcon icon={faEye} color={`${Colors.label}`}/>
                 </MaskButton>
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
       <Modal 
            modal={modal} 
            setModal={setModal}
            msg={'Erro! Email ou senha invalidos.'}/>
      </>
      
   )
}

export default Home
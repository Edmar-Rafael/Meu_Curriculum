import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { EMAIL, JWT, PASSWORD } from '../../config'
import { useAuth } from '../../hooks/useAuth'
import Logo from '../../icons/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Colors } from '../../resources'
import { 
   Button, 
   Container, 
   FloatingLabel, 
   Input, 
   InputLabelContainer, 
   Separator, 
   ToRegister } from '../../components'
import { 
   HomeContainer,
   HomeFormContainer,
   HomeSVG,
   MaskButton,
   ScreenRow } from './styles'

function Home() {
   const [maskType, setMaskType] = useState(true)
   const [user, setUser] = useState({
      id: 1,
      token: JWT,
      name: '',
      password: ''
   })
   const {logIn} = useAuth()
   

   function notify() {
      if(user.name!== EMAIL || user.password !== PASSWORD) {
         toast.error('Opss! E-mail ou senha inválidos!')
      }
   }
   
   function handleSubmit(event) {
      event.preventDefault()
      try {
         logIn(user)
      } catch {
         notify()
      }
   }

   function handleChange(event) {
      const {id, value} = event.target
      setUser({...user, [id]: value})
   }


   return(
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
                    type={maskType && 'password'}
                    placeholder='Senha' 
                    value={user.password}
                 />
                 <FloatingLabel msg={'Senha'} width={50}/>
                 <Separator height={21}/>
                 <MaskButton type='button' onClick={() => setMaskType(!maskType)}>
                    <FontAwesomeIcon 
                        size='2x'
                        icon={maskType ? faEye : faEyeSlash} 
                        color={`${Colors.label}`} 
                        className={maskType ? 'mask' : ''}/>
                 </MaskButton>
              </InputLabelContainer>
              <Separator height={11}/>
              <ScreenRow>
                 <Button
                    onClick={notify}
                    type='submit'
                    width={329}
                    text='ENTRAR'
                 />
                 <Separator height={28}/>
                 <ToRegister/>
              </ScreenRow>
              <ToastContainer theme='colored' />
           </HomeFormContainer>
        </HomeContainer>
     </Container>
   )
}

export default Home
import React, { FormEvent, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { EMAIL, JWT, PASSWORD } from '../../config'
import { useAuth } from '../../hooks/useAuth'
import { Icons, Logo } from '../../components'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { 
   Button, 
   Container, 
   Input, 
   Separator
} from '../../components'
import { 
   HomeContainer,
   HomeFormContainer,
   HomeSVG,
   ScreenRow 
} from './styles'
import { UserType } from '../../contexts/authContext'
import { UserProps } from '../../@types/types'

   type LogInType = {
      logIn: (value: UserType) => void
   }


function Home() {
   const [maskType, setMaskType] = useState(true)
   const [user, setUser] = useState<UserProps>({
      id: 1,
      token: JWT,
      name: '',
      password: ''
   })

   const {logIn}: LogInType  = useAuth()
   
   function notify() {
      if(user.name !== EMAIL || user.password !== PASSWORD) {
         toast.error('Opss! E-mail ou senha inválidos!')
      }
   }
   
   function handleSubmit(event: FormEvent) {
      event.preventDefault()
      logIn(user)
   }

   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
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
               <Input 
                  onChange={handleChange}
                  x={329}
                  id='name'
                  label={'E-mail'}
                  placeHolder={'E-mail'} 
                  value= {user.name}
               />
               <Input 
                  onChange={handleChange}
                  x={329}
                  id='password'
                  label={'Senha'}
                  type={maskType ? 'password' : ''}
                  placeHolder='Senha' 
                  value={user.password}
               />
               <Button onClick={() => setMaskType(!maskType)} fa_eye_button>
                  <Icons faIcon={maskType ? faEye : faEyeSlash} />
               </Button>
               <ScreenRow>
                  <Button
                     onClick={notify}
                     type='submit'
                     x={329}
                     text='ENTRAR'
                  />
                  <Separator y={28}/>
                  <Button text={'Registrar-se'} to_register/>
               </ScreenRow>
               <ToastContainer theme='colored' />
            </HomeFormContainer>
         </HomeContainer>
      </Container>
   )
}

export default Home
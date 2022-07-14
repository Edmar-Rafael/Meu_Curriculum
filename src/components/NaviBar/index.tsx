import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useLocation } from "react-router";
import { Button } from "..";
import { useAuth } from "../../hooks/useAuth";
import { Logo } from "..";
import { ButtonContainer, Content, LogoContainer, NaviBarContainer } from "./styles";

type LogOutType = {
   logOut?: () => void
}


function NaviBar() {
   const isEdition = useLocation().pathname === '/edition'
   const { logOut }: LogOutType = useAuth()
   const history = useHistory()

   return (
      <NaviBarContainer>
         <Content>
            <ButtonContainer>
            { isEdition &&
               <Button
                  onClick={() => history.push('/')} 
                  text=' VOLTAR'
                  x={100}
               >
                  <FontAwesomeIcon icon={faArrowLeft}/>
               </Button> 
            }               
            </ButtonContainer>            
            <LogoContainer>
               <Logo pathy={35} pathx={35} y={50} x={55}/>
            </LogoContainer>
            <ButtonContainer>
               <Button 
                  onClick={logOut}
                  text='SAIR'
                  x={100}
               />
            </ButtonContainer>
         </Content>
      </NaviBarContainer>
   )
}

export default NaviBar
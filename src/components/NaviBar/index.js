import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useLocation } from "react-router";
import { Button } from "..";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../../icons/Logo";
import { ButtonContainer, Content, LogoContainer, NaviBarContainer } from "./styles";

function NaviBar() {
   const isEdition = useLocation().pathname === '/edition'
   const { logOut } = useAuth()
   const history = useHistory()

   function handleTables() {
      history.push('/')
   }
   

   return (
      <NaviBarContainer>
         <Content>
            <ButtonContainer>
            {isEdition &&
               <Button
               text=' VOLTAR'
               onClick={handleTables} 
               width={100}
               height={30}
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
                  text='SAIR'
                  onClick={logOut}
                  width={100}
                  height={30}
               />
            </ButtonContainer>
         </Content>
      </NaviBarContainer>
   )
}

export default NaviBar
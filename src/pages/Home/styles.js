import styled from "styled-components";
import { Colors } from '../../resources'

export const HomeContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 80%;
   justify-content: space-between;
   align-items: center;
   padding: 10px;

   @media(max-width: 800px) {
      width: 95%;
   }

   @media(max-width: 500px) {
      margin-top: -50px;
      justify-content: center;
      min-height: 555px;
      min-width: 95%;
   }
`

export const HomeSVG = styled.div``

export const HomeFormContainer = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 44%;
   height: 330px;
   background-color: ${Colors.background.secondary};
   border-radius: 4px;


   @media(max-width: 800px) {
      height: 290px;
   }

   @media(max-width: 500px) {
      padding-bottom: 7px;
      min-width: 100%;
      height: 250px;
   }  
`

export const MaskButton = styled.button`
   width: 22px;
   height: 22px;
   border: none;
   transform: translate3d(-22px, -40px, 0);
   background-color: ${Colors.background.secondary};
   cursor: pointer;
`

export const ScreenRow = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   @media(max-width: 800px) {
      width: 90%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
   }
`
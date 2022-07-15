import styled from 'styled-components'
import { Colors } from '../../resources'

export const TablesContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   width: 54%;
   height: 430px;
   padding: 35px 55px;
   background-color: ${Colors.background.secondary};

   @media(max-width: 800px) {
      margin-top: 50px;
      height: 300px;
      width: 75%;
      padding: 20px 30px;
   }

   @media(max-width: 500px) {
      margin-top: -20px;
      height: 470px;
      width: 85%;
      padding: 10px 15px;
   }
`

export const TablesHeader = styled.div`
   display: flex;
   flex-wrap: wrap;
   height:100px;
   width: 100%;
`

export const NameContainer = styled.span`
   width: 75%;
   color: white;
   font-size: 14px;

   @media(max-width: 500px) {
      width: 65%;
   }
`

export const OptionsContainer = styled.div`
   width: 25%;
   color: white;
   font-size: 14px;

   @media(max-width: 500px) {
      width: 35%;
   }
`

export const UserNameContainer = styled.span`
   width: 75%;
   font-size: 14px;

   @media(max-width: 500px) {
      width: 65%;
   }
`
export const ButtonContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 25%;

   @media(max-width: 500px) {
      width: 35%;
   }
`

export const Img = styled.img`
   max-width: 24px;
   max-height: 23px;
`

export const MaterialTable = styled.div`
   width: 100%;
   height: 190px;
`

export const PlusContainer = styled.div`
   display: flex;
   justify-content: right;
   width: 80%;

   @media(max-width: 700px) {
      width: 99%;
      padding-top: 4px;
   }

   @media(max-width: 500px) {
      width: 95%;
      padding-top: 5px;
   }
`

export const PlusButtonContainer = styled.div`
   @media(max-width: 700px) {
      width: 38px;
   }

   @media(max-width: 500px) {
      width: 11%;
   }
   
`

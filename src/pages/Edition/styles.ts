import styled from "styled-components";
import { Colors } from '../../resources'


export const FormContainer = styled.form`
   width: 58%;
   padding: 30px 25px 0 25px;
   background-color: ${Colors.background.secondary};

   @media(max-width: 800px) {
      min-width: 93%;
      margin-top: 50px;
      padding: 10px;
   }

   @media(max-width: 500px) {
      min-width: 90%;
      margin-top: 50px;
      padding: 10px;
   }
`

export const GridContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: 100%;
`

export const TextAreaContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
`

export const TextArea = styled.textarea`
   width: 100%;
   height: 95px;
   margin-bottom: 27px;
   padding: 10px 5px 5px 15px;
   color: white;
   font-weight: 400;
   font-family: 'Roboto', sans-serif;
   font-size: 16px;
   background-color: transparent;
   border: ${Colors.border};
   border-radius: 3.5px;


   &:hover, :focus {
      border-color: ${Colors.purple.secondary};
      outline: none;
   }

   &:focus + label, :not(:placeholder-shown) + label {
      font-size: 16px;
      font-weight: 700;
      color: ${Colors.purple.primary};
      transform: translate3d(-6px, -148px, 0) scale(.84);
   }
`

export const FloatingLabelTextArea = styled.label`
   font-size: 18px;
   color: ${Colors.label};
   font-weight: 100;
   font-family: 'Noto-sans';
   width: 95px;
   max-width: 99%;
   margin-left: 15px;
   text-align: center;
   transform-origin: 0 0;
   transform: translateY(-128px);
   transition: all .3s;
   background-color: ${Colors.background.secondary};
   z-index: 9;
   pointer-events: none;
`
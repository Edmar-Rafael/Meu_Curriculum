import styled from "styled-components";

const Container = styled.div`
   width: ${({width}) => width || 5}px;
   height: ${({height}) => height || 5}px;
`

export default Container
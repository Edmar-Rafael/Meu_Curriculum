import styled from "styled-components";

type SeparatorType = {
   x?: number;
   y?: number;
}

const Separator = styled.div<SeparatorType>`
   width: ${({x}) => x || 5}px;
   height: ${({y}) => y || 5}px;
`

export default Separator
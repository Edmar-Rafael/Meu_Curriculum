import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Colors } from "../../resources";

export const IconsContainer = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${Colors.label};
  transition: all .3s;

  &:hover{
    color: ${Colors.purple.primary};
    filter: brightness(0.9);
  }

  &.fa_plus{
    font-size: 1rem;
    color: ${Colors.font.black};
  }
`
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`

  & > div {
    position: unset !important;
   
  }
  .imageHoverFilter{
    &:hover{
      filter: saturate(80%) brightness(.8);
      transition: all 1s ease;
    }
  }
`;

export const NextImage = styled(Image)`
border-radius: 4px;
box-shadow: ${({ theme }) => theme.shadows.soft};
`;

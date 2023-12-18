import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.default};
    }
    
    html{
        font-family: monospace;
        scroll-behavior: smooth;
        background: ${(props) => props.theme.colors.element_base};
    }
    body{
        overflow-x: hidden;
        width: 100%;
        height: 100vh;
    }
    button{
        display: flex;
        justify-content: center;
        text-align: center;
        border: none;
        cursor: pointer;
        padding: 4px;
    }
    li, ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    
    .active-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 320px;
        height: 240px;
        padding: 1rem;
        background: ${(props) => props.theme.colors.element_base};
        border-radius: 4px;
        margin: 25% auto;
        h3{
            font-size: 1.24rem;
            color: ${(props) => props.theme.colors.black100}
        }
        @media(max-width: 720px){
            width: 92%;
        }
  }

  .video-modal{
      background: transparent;
      @media (max-width: 720px) {
        margin: 12px auto;
        align-self: center;
     }
  }

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
  }

  .react-modal-overlay-video{
        background: rgba(0, 0, 0, .88);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
  }

  .collapsible-info-parent{
    width: 100%;
    cursor: pointer;
  }

  .accordionContent{
    padding: 14px;
    color: ${({ theme }) => theme.colors.secondary_light};
    font-size: ${({ theme }) => theme.sizes.medium};
  }
  
  .accordionContainer{
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 800;
  }
  .openedAccordionContainer{
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 500;
    padding: 14px 32px 0;
  }

  .headerScrolling {
    position: fixed;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .headerNotScrolling {
    background-color: transparent;
  }

  .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
  }
  .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }

  .countUp{
    font-size: ${({ theme }) => theme.sizes.xxhuge};
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    @media(max-width: 1080px){
      font-size: ${({ theme }) => theme.sizes.xhuge};
    }
    @media(max-width: 720px){
      font-size: ${({ theme }) => theme.sizes.huge};
    }
  }

  .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.54);
    transition: all 1s ease;
  }

  .rgbBackground{
    background: linear-gradient(45deg,  
      ${({ theme }) => theme.colors.error}, 
     ${({ theme }) => theme.colors.secondary});
  }

  .whatsappButton{
    background-color: #25d366;
    color: ${({ theme }) => theme.colors.white100};
  }
    //ANIMATED VIDEO AS BACKGORUND 
  .videoBackground{
    position: absolute;
    right: 0;
    top: 0;
    min-width: 100%;
    opacity: .2;
    z-index: 1;
    @media(max-width: 720px) {
      min-width: 100%;
      min-height: 50%;
    }
  }  

  .socialContactIcons{
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.primary_light};
    margin-right: 8px;
  }

  .staffCard{
    & h3 {
      color:  ${({ theme }) => theme.colors.primary};
      text-align: center;
      margin: -16px auto 0;
    }
    & span {
      color:  ${({ theme }) => theme.colors.black500};
      text-align: center;
      margin: 8px auto -24px;
    }


    @media(max-width: 720px) {
      width: 100%;
    }
  }

 

  //REACT-RESPONSIVE-CARROUSEL-CUSTOM -DOTS
   .carousel .control-dots .dot {
      -webkit-transition: opacity 0.25s ease-in;
      -moz-transition: opacity 0.25s ease-in;
      -ms-transition: opacity 0.25s ease-in;
      -o-transition: opacity 0.25s ease-in;
      transition: opacity 0.25s ease-in;
      opacity: 0.3;
      filter: alpha(opacity=30);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 0%;
      width: 16px;
      height: 2px;
      cursor: pointer;
      display: inline-block;
      margin: 0 8px; 
  } 

  //REACT-SLICK-CUSTOM -DOTS
.slick-dots li
 {
    position: relative;
    width: 12px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  
  .slick-dots li button
  {
    width: 12px;
    height: 12px;  
    display: flex;
    margin: 0 auto;
    border-radius: 100%;
    border: 0;
    outline: none;    
    background-color: ${({ theme }) => theme.colors.primary_light};
    cursor: pointer;
  }

.slick-dots li.slick-active button:before
{
  height: 12px;
  width: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;
}

.slick-dots li button:before
{
  content: '';
}
`;

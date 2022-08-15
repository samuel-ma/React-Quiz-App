

import styled, {createGlobalStyle} from "styled-components";
import GBImage from "./images/image1.png";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body{
    background-image: url(${GBImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  *{
    box-sizing: border-box;
    font-family: "Quicksand";
    color: white;
  }

`
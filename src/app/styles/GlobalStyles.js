import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  body{
    background-color: var(--primary);
    font-size: 16px;
    font-weight: 400;
  }
  :root {
    --primary: #F5F5F5;
    --secondary: #5d80d6;
    --hover: #6e86d6;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    --white: #fff;
  }
`;

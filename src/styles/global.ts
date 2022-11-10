import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        list-style: none;
        box-sizing: border-box
        
    }

    button{
      cursor: pointer;
      border: none;
      background: transparent;
    }

    img{
      max-width: 100%;
      max-height: 100%;
    }

    input, select{
      border: none;
      outline: none;
    } 

    a{
      text-decoration: none;
      color: #000000;
    }

    :root{
      --color-primary: #1DA1F2;
      --color-secondary: #f5f8fa;
      
      --grey-1: #212529;
      --grey-2: #343B41;
      --grey-3: #657786;
      --grey-4: #AAB8C2;
      --grey-5: #E1E8ED;
      --grey-6: #F5F8FA;

      --opaco: rgb(0 0 0 / 93%);
      --opaco-2: rgb(0 0 0 / 80%);

      --black: #000000;
      --white: #ffffff;

      --color-success: #4BAD31;
      --color-error: #E2142D;

      --message-error: #e12525;

      --font-family: "Roboto", sans-serif;
    }
`;

import { createGlobalStyle } from 'styled-components'
import wallpaper from '../assets/wallpaper.jpg'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 16px;
  }

  :root {
    --darkGrey: #121214;
    --lightGrey: #F8F9FA;
    --green: #13AA52;
    --grey: #9c9c9c;
    --mediumGrey: #dedede;
    --paper: #e0c9a6;
    --red: #ff0000;
  }

  body {
    background: url(${wallpaper});
    color: var(--blackGrey);

    @media (min-width:800px) {
      background: url(${wallpaper}) no-repeat;
      background-size: cover;
    }
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  h2 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`

import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`  
${() => css`
  :root {
    --background: #1f2229;
    --background2: #2e303c;
    --background-button: #373945;
    --background-button2: #4b4d59;
    --yellow: #fae800;
    --gray: #bec2c6;
    --white: #fbfbfb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px "Poppins", Arial, sans-serif;
    color: #fbfbfb;
    background: var(--background);
  }

  input,
  textarea {
    font-family: "Poppins";
  }

  button {
    cursor: pointer;
  }
  nav.sidebar {
    display: flex;
    flex-direction: column;

    align-items: center;

    max-width: 24rem;
    width: 100%;

    padding: 2rem;

    background: var(--background2);

    > span {
      margin-bottom: 4.5rem;
      font-size: 3rem;
      font-weight: 600;
      color: var(--yellow);

      p {
        display: inline;
        color: var(--white);
      }
    }

    .buttons-container {
      display: flex;
      flex-direction: column;

      width: 100%;
    }
  }
  .container {
    max-width: 52.5rem;
    width: 100%;

    margin: 0 auto;
  }

  header {
    span.category {
      display: block;
      margin-top: 2rem;

      font-size: 2.25rem;
      font-weight: 600;
      color: var(--gray);
    }

    span {
      color: var(--white);
    }
  }

  main {
    width: 100%;
    margin-top: 5.625rem;

    .movies-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 4.75rem;
      list-style: none;
    }
  }
`}
   `;

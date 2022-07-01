import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  background-color: var(--paper);
  display: flex;
  flex-direction: column;

  position: fixed;
  bottom: 0;

  @media (min-width: 550px) {
    padding: 10px calc((100vw - 500px)/2)
  }
  
  > h2 {
    text-align: center;
  }

  > div {
    margin-top: 10px;
    padding: 15px 0;
    border-top: 1px solid var(--mediumGrey);
    display: flex;
    justify-content: space-between;
  }

   > button {
    background-color: var(--green);
    border: 1px solid var(--green);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: 'Akzidenz Grotesk BQ Medium', -apple-system, BlinkMacSystemFont,
      sans-serif;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    outline: 0;
    padding: 10px 25px;
    text-align: center;
    transform: translateY(0);
    transition: transform 150ms, box-shadow 150ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
      transform: translateY(-2px);
    }

    @media (min-width: 768px) {
      .button-37 {
        padding: 10px 30px;
      }
    }
  }

`

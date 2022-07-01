import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 15px;
  margin-bottom: 10px;
  background: var(--paper);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 5px;

  @media (min-width: 560px) {
    margin: 5px 5px;
  }

  @media (min-width: 900px) {
    margin: 10px 10px;
  }

  > img {
    height: 250px;
    object-fit: contain;
  }

  > div {
    border-bottom: 1px solid var(--grey);
    margin: 10px 0;
  }

  > h2 {
    margin-bottom: 10px;
  }

  > span {
    margin-bottom: 20px;
    color: var(--darkGrey);
    font-size: 14px;
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


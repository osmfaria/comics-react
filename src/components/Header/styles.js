import styled from "styled-components";

export const Container = styled.div`
  height: 70px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background: var(--paper);

  @media (min-width: 1000px) {
    padding: 0 100px;
  }

  > span {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--darkGrey);
  }

  > div {
    display: flex;
    align-items: center;
    color: var(--darkGrey);
    position: relative;

    > span {
      display: flex;
      align-items: center;
      margin-right: 15px;
      cursor: pointer;

      > p {
        margin-left: 7px;
      }

      &:hover {
        color: var(--lightGrey)
      }
    }

    > div {
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      position: absolute;
      height: 18px;
      width: 18px;
      color: var(--lightGrey);
      border-radius: 50%;
      background-color: var(--green);
      font-size: 12px;
      top: -5px;
      left: 10px;
    }
  }
`

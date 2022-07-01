import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background: var(--lightGrey);
  display: flex;
  height: 120px;
  position: relative;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto 10px;

  > img {
    height: 100px;
    object-fit: contain;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 180px;
    margin-left: 20px;

    > p {
      width: 150px; // Example for width
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      overflow: hidden;
      font-size: 14px;
    }

    > span {
      color: var(--grey);
      font-size: 14px;
      margin-top: 20px;
    }
  }

  > span {
    position: absolute;
    top: 20;
    right: 10px;
    background-color: var(--mediumGrey);
    cursor: pointer;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding: 3px;

    &:hover {
      color: var(--red);
    }
  }

  .quantity {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 65px;
    right: 8px;
    align-items: center;

    > span {
      font-size: 14px;
      margin-right: 5px;
      color: var(--grey);
    }

    > input {
      border: 2px solid #e0e0e0;
      padding: 0px 5px;

      height: 25px;
      width: 40px;

      font-weight: 500;
      font-size: 12px;
      line-height: 15px;

      color: var(--grey);

     
      &::-webkit-outer-spin-button {
        opacity: 1;
      }
    }
  }
`

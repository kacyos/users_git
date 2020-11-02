import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  background-color: #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 30px auto;

  h1 {
    font-size: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;

  input {
    flex: 1;
    border: 1px solid #a9a9a9;
    border-radius: 5px;
    outline-color: #a9a9a9;
    padding: 5px;
    font-size: 16px;
  }
`;

export const FindButton = styled.button`
  margin-left: 10px;
  border: none;
  outline: 0;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    color: #363636;
    margin: 0;
  }

  svg:hover {
    color: #1c1c1c;
  }
`;

export const List = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  display: flex;

  li {
    border: 1px solid black;
    border-radius: 4px;
    background-color: #fff;
    width: 30%;
    min-width: 210px;
    margin: 10px;
    text-align: center;
  }

  img {
    max-width: 210px;
    max-height: 210px;
    margin-top: 5px;
    border-radius: 50%;
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    outline: 0;
    border: 0;
    background: #222;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    margin: 50px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  svg {
    margin: 0;
  }
`;

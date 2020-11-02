import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  background-color: #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  h1,
  p {
    text-align: center;
  }

  p {
    font-size: 18px;
  }

  img {
    margin: 10px auto;
    justify-content: center;
    border-radius: 4px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  li {
    border: 1px solid black;
    border-radius: 4px;
    max-width: 300px;
    margin: 10px;
    padding: 10px;
    text-align: center;
    background-color: #fff;
  }
`;

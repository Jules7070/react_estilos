import styled from "styled-components";

export const CounterContainer = styled.div`
  text-align: center;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CounterValue = styled.p`
  font-size: 2rem;
  color: ${(props) => 
    props.isPositive ? "green" : props.isNegative ? "red" : "black"};
`;

export const CounterButton = styled.button`
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3700b3;
  }
`;

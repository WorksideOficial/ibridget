import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  padding: 15px 25px 15px 25px;
  background-color: transparent;
  background-color: var(--secondary);
  color: var(--white);
  border-radius: 10px;
  font-size: 15px;
  font-weight: 400;
  &:hover{
    background-color: var(--hover);
    color: var(--white);
    cursor: pointer;
  }
`;
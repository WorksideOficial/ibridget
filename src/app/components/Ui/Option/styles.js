import styled from 'styled-components';

export const Select = styled.select`
  width: 20%;
  height: 50px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border:none;
  border: 1px solid var(--gray);
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
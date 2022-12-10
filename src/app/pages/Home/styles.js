import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 100px;
`;

export const BoxGraphic = styled.div`
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
`;
export const Box01 = styled.div`
  display: flex;
  width: 50%;
  height: 250px;
`;
export const Box02 = styled.div`
  width: 50%;
  height: 250px;
`;
export const BoxTable = styled.div`
margin: 0 auto;
overflow-x: scroll;
width: 85%;
  th,
  td,
  table {
    width: 100%;
    border: 1px solid white;
    padding: 20px;
    border-collapse: collapse;
    text-align: center;
  }
  table {
    margin: 10px 0;
    thead{
      background: #ccc;
      color: #333;
    }
  }

  td {
    width: 200px;
  }
`;
import React from "react";
import Form from "../../components/Form";
import { Box01, Box02, BoxGraphic, BoxTable, Container } from "./styles";

import Data from "../../utils/dados.json";

const Home = () => {
  return (
    <>
      <Container>
        <h2>Pesquisa</h2>
        <Form />
      </Container>
      <BoxGraphic>
        <Box01>
          <h2>Gráfico 01</h2>
        </Box01>
        <Box02>
          <h2>Gráfico 02</h2>
        </Box02>
      </BoxGraphic>
      <BoxTable>
        <h2>Tabela</h2>
        {/* {Data.map((item, index) => {
      return item.clientes.cliente01.data;
    })} */}
        <table>
          <thead>
            <tr>
              <td>Cliente</td>
              <td>Chamados Total</td>
              <td>Chamados</td>
              <td>Ocorrências Total</td>
              <td>Ocorrências</td>
            </tr>
          </thead>
          <tbody>
            {Data.map(({ clientes }, index) => {
              // const { cliente01, cliente02, cliente03, cliente08 } = clientes
              const teste = [{ 'cliente07': 'cliente07', 'cliente08': 'cliente08' }]
              const teste2 = teste.map((item) => item)
              console.log(teste2)

              // {teste.map((item, index) => {
              //   return(

              //   )
              // })}

              // return (
              //   <tr key={index}>
              //     <td>{clientes[8].data}</td>
              //     <td>{clientes[8].hora}</td>
              //     <td>{clientes[8].chamadas_total}</td>
              //     <td>{clientes[8].ocorrencias_total}</td>
              //     <td>{clientes[8].chamadas_atendimento_humano}</td>
              //   </tr>
              // )
            })}
          </tbody>
        </table>

      </BoxTable>
    </>
  );
};

export default Home;
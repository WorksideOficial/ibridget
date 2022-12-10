import React from "react";
import Form from "../../components/Form";
import Table from "../../components/Table";
import {
  Box01,
  Box02,
  BoxGraphic,
  BoxTable,
  Container
} from "./styles";
import BarChart from "../../components/Charts/BarChart";
import VertBarChart from "../../components/Charts/VertBarChart";
import { ocorrencia, chamados } from "../../utils/data";

const Home = () => {
  return (
    <>
      <Container>
        <h2>Pesquisa</h2>
        <Form />
      </Container>
      <BoxGraphic>
        <Box01>
          <BarChart chamados={chamados} />
        </Box01>
        <Box02>
          <VertBarChart ocorrencia={ocorrencia} />
        </Box02>
      </BoxGraphic>
      <BoxTable>
        <h2>Tabela</h2>
        <Table />
      </BoxTable>
    </>
  );
};

export default Home;
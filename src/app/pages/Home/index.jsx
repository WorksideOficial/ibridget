import React, { useState } from "react";
import {
  Box01,
  Box02,
  BoxGraphic,
  BoxTable,
  Container,
  Title
} from "./styles";
import BarChart from "../../components/Charts/BarChart";
import { ocorrencia, chamados, TableHeaderContent } from "../../utils/data";
import Table from "../../components/Table";
import Data from "../../utils/dados.json";
import Option from "../../components/Ui/Option";
import LineCharts from "../../components/Charts/LineCharts";


const Home = () => {
  const [search, setSearch] = useState('');
  const dataClient = Data[1].geral.clientes.split(',');

  const dataResult = Data.filter(({ clientes }) => {
    return Object.keys(clientes).map((key) => {
      return console.log(clientes[key].data)
    });
  })

  console.log(dataResult)

  return (
    <>
      <Container>
        <Title>Pesquisa</Title>
        <Option
          search={search}
          setSearch={setSearch}
          dataClient={dataClient}
        />
      </Container>
      <BoxGraphic>
        <Box01>
          <LineCharts ocorrencia={ocorrencia} />
        </Box01>
        <Box02>
          <BarChart chamados={chamados} />
        </Box02>
      </BoxGraphic>
      <BoxTable>
        <Title>Tabela</Title>
        <Table TableHeader={
          <tr>
            {TableHeaderContent.map(({ id, name }) => (
              <td key={id}>{name}</td>))}
          </tr>
        }
          TableBody={
            <>
              {Data.map(({ clientes }) => {
                const table = Object.keys(clientes).map((item, index) => {
                  const convertedDate = new Date(clientes[item].data).toLocaleDateString('pt-BR');
                  return (
                    <tr key={index}>
                      <td>{clientes[item].chamadas_total}</td>
                      <td>{clientes[item].chamadas_falha_operadora}</td>
                      <td>{clientes[item].chamadas_telefone_incorreto}</td>
                      <td>{clientes[item].chamadas_nao_atendida}</td>
                      <td>{clientes[item].chamadas_atendimento_maquina}</td>
                      <td>{clientes[item].chamadas_atendimento_humano}</td>
                      <td>{clientes[item].chamadas_abandono_pre_fila}</td>
                      <td>{clientes[item].chamadas_atendimento_pa}</td>
                      <td>{clientes[item].ocorrencias_total}</td>
                      <td>{clientes[item].ocorrencias_sem_contato}</td>
                      <td>{clientes[item].ocorrencias_com_contato}</td>
                      <td>{clientes[item].ocorrencias_abordagem}</td>
                      <td>{clientes[item].ocorrencias_fechamento}</td>
                      <td>{convertedDate}</td>
                      <td>{clientes[item].hora}</td>
                    </tr>
                  )
                });
                return table;
              })}
            </>
          } />
      </BoxTable>
    </>
  );
};

export default Home;
import React from "react";
import Data from "../../utils/dados.json"

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Cliente</td>
          <td>Chamados Total</td>
          <td>Chamados Falha OP</td>
          <td>Chamados Tel Inco</td>
          <td>Chamadas Não Aten</td>
          <td>Chamadas Aten M</td>
          <td>Chamadas Aten H</td>
          <td>Chamadas Aband Fila</td>
          <td>Chamadas Atend Pa</td>
          <td>Ocorrencias Total</td>
          <td>Ocorrencias Sem Cont</td>
          <td>Ocorrencias com Contato</td>
          <td>Ocorrencias Abordagem</td>
          <td>Ocorrencias Fechamento</td>
          <td>Data</td>
          <td>Hora</td>
        </tr>
      </thead>
      <tbody>

        {Data.map(({ clientes }) => {
          const table = Object.keys(clientes).map((item, index) => {
            return (
              <tr key={index}>
                <td>cliente 01</td>
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
                <td>{clientes[item].data}</td>
                <td>{clientes[item].hora}</td>
              </tr>
            )
          });
          return table;
        })}
      </tbody>
    </table>
  );
}

export default Table


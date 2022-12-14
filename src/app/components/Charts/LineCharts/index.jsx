import React from 'react';
import { Line } from 'react-chartjs-2';


const LineCharts = ({ chamados }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          chamados[0].contas_quantidade,
          chamados[0].chamadas_total,
          chamados[0].chamadas_falha_operadora,
          chamados[0].chamadas_telefone_incorreto,
          chamados[0].chamadas_nao_atendida,
          chamados[0].chamadas_atendimento_maquina,
          chamados[0].chamadas_atendimento_humano,
          chamados[0].chamadas_abandono_pre_fila,
          chamados[0].chamadas_atendimento_pa,
        ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <Line options={options} data={data} />
  );
}

export default LineCharts;
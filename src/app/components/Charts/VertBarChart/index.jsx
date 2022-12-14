import React from 'react';
import { Bar } from 'react-chartjs-2';

const VertBarChart = ({ ocorrencia }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Ocorrências',
        data: [
          ocorrencia[0].ocorrencias_abordagem,
          ocorrencia[0].ocorrencias_com_contato,
          ocorrencia[0].ocorrencias_fechamento,
          ocorrencia[0].ocorrencias_sem_contato,
          ocorrencia[0].ocorrencias_total
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <Bar options={options} data={data} />
  );
}

export default VertBarChart;
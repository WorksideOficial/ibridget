import React from 'react';
import { Line } from 'react-chartjs-2';


const LineCharts = ({ ocorrencia }) => {
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
        label: 'Ocorrências',
        data: [
          ocorrencia[0].ocorrencias_total,
          ocorrencia[0].ocorrencias_sem_contato,
          ocorrencia[0].ocorrencias_com_contato,
          ocorrencia[0].ocorrencias_abordagem,
          ocorrencia[0].ocorrencias_fechamento,
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
import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = ({ chamados }) => {
  return (
    <div>
      <Pie
        data={{
          labels: [
            'Contas Qtd',
            'Chm Total',
          ],
          datasets: [
            {
              label: '# of votes',
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
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={580}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 14,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart
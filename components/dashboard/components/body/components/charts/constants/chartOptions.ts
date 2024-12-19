import { ChartOptions } from 'chart.js'

export const chartOptions: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '', // Título dinámico
      color: 'transparent',
      font: {
        size: 18,
      },
    },
    datalabels: {
      color: '#fff',
      backgroundColor: '#825a9e',
      borderRadius: 5,
      padding: 5,
      anchor: 'end',
      align: 'top',
    },
  },
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: '#5a3e6d',
      },
      grid: {
        display: true,
      },
    },
    y: {
      ticks: {
        color: '#5a3e6d',
        align: 'end', // Asegúrate de usar valores válidos aquí
      },
    },
  },
}

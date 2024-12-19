import { ChartData } from 'chart.js'
import { datasetColors } from '../constants'

export const createChartData = (labels: string[] | number[], title: string, data: number[]): ChartData<'bar'> => {
  const chartData: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: datasetColors,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  }

  return chartData
}

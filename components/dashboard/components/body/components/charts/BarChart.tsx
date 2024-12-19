import Chart, { CategoryScale } from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { ReactNode } from 'react'
import { Bar } from 'react-chartjs-2'
import { chartOptions } from './constants'
import { createChartData } from './service'
import { ChartHeader } from './components'

Chart.register(CategoryScale, ChartDataLabels)

interface Props {
  labels: string[] | number[]
  data: number[]
  total: number
  title: string
  children: ReactNode
  hasFilter?: boolean
}

export const BarChart = ({ labels, data, title, total, children, hasFilter = true }: Props) => {
  const chartData = createChartData(labels, title, data)

  return (
    <div className='bar-container'>
      <ChartHeader title={title} hasFilter={hasFilter}>
        {children}
      </ChartHeader>

      <div>
        <div>
          <h4>{title}</h4>
          <p>{total}</p>
        </div>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}

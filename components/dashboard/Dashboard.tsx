import { Body } from './components/body'
import { Header } from './components/header'
import { useFetch } from './hooks/useFetch'

export const Dashboard = () => {
  const { loading } = useFetch()
  loading && <div>Cargando...</div>
  return (
    <div className='dashboard-container'>
      <Header />
      <Body />
    </div>
  )
}

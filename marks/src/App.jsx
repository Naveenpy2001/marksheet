import './App.css'
import {Routes, Route} from 'react-router-dom'
import ResultsPage from './pages/ResultsPage'
import AuthPage from './pages/AuthPage'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/dashboard' element={<ResultsPage />} />
    </Routes>
    </>
  )
}

export default App

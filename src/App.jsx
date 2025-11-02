import { Routes, Route } from 'react-router-dom'
import HomePage from '@/assets/pages/HomePage'
import './App.css'

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
    </div>
  )
}

export default App

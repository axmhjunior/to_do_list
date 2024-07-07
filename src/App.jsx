import Home from './pages/home/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Filter from './components/filter/Filter'
import Form from './components/form/Form'
import CompleteTasks from './pages/completeTasks/CompleteTasks'
import IncompleteTasks from './pages/incompleteTasks/IncompleteTasks'
import Provaider from './context/Provaider'

function App() {
 

  return (
  <Provaider>
   <BrowserRouter>
   <div className='border rounded p-4 items-center flex flex-col justify-center'>
    <Form/>
    <Filter/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/completeTasks' element={<CompleteTasks/>}/>
        <Route path='/incompleteTasks' element={<IncompleteTasks/>}/>
      </Routes>
    </div>
   </BrowserRouter>
   </Provaider>
  )
}

export default App

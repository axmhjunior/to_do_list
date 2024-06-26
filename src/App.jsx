import { useState } from 'react'
import Form from './components/form/Form'
import Menu from './components/menu/Menu'
import TasksList from './components/tasksList/TasksList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border rounded p-4 items-center flex flex-col justify-center'>
      <Form/>
      <Menu/>
      <TasksList/>
    </div>
  )
}

export default App

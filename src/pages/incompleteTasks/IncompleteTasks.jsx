import { useContext, useEffect, useState } from "react";
import TasksList from "../../components/tasksList/TasksList";
import { AppContext } from "../../context/AppContext";

const IncompleteTasks = () => {
    const {taskList} = useContext(AppContext)
    const [task, setTask] = useState([])

    useEffect(()=>{
        const data = taskList.filter(e=> e.isChecked === false)
        setTask(data)
    },[taskList])
    return ( 
        <TasksList taskList={task}/>
     );
}
 
export default IncompleteTasks;
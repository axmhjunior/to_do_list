import { useContext, useState, useEffect } from "react";
import TasksList from "../../components/tasksList/TasksList";
import { AppContext } from "../../context/AppContext";

const CompleteTasks = () => {
    const {taskList} = useContext(AppContext)
    const [task, setTask] = useState([])

    useEffect(()=>{
        const data = taskList.filter(e=> e.isChecked === true)
        setTask(data)
    },[taskList])
    return ( 
        <TasksList taskList={task}/>
     );
}
 
export default CompleteTasks;
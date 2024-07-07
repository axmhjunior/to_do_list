import { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import Form from "../../components/form/Form";
import TasksList from "../../components/tasksList/TasksList";
import { AppContext } from "../../context/AppContext";
import { api } from "../../apiConfig/ApiConfig";

function Home() {

    const {taskList, setTaskList} = useContext(AppContext)

    useEffect(()=>{
        const getTasks = async () =>{
            const response = await api.get('tasks');
            setTaskList(response.data)     
        }
        getTasks()
    }, [taskList])

    
    return ( 
        <TasksList taskList={taskList}/>
     );
}

export default Home;
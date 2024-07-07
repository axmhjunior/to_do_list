import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { api } from "../../apiConfig/ApiConfig";



const Form = () => {

    const [task, setTask] =useState();


    const handleGetTask = (event) => {
        setTask(event.target.value)
    }

    const handleAddTask = async (event) => {
        event.preventDefault();
        if(task.length != 0){
        try{
            const newTask = {
                task_content:task,
                isChecked:false
            }
            await api.post('tasks', newTask)
            setTask('')
        }catch(error){
            console.log(error)
        }        
    }
    }

    return ( 
        <form className="space-x-3">
            <input type="text" 
                onChange={handleGetTask} 
                className="rounded-xl px-2 border-purple-100 border-2 bg-transparent outline-none" 
                placeholder="Type a task..."
                value={task}  />

            <button type="submit" 
                onClick={handleAddTask} 
                className="border w-7 h-7 px-1 rounded-full border-green-800 bg-white">+</button>
        </form>
     );
}

export default Form;
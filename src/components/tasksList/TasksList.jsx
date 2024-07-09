import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { api } from "../../apiConfig/ApiConfig";
import { useState } from "react";


function TasksList({taskList}) {

    const [showAllTask, setShowAllTask] = useState(false)

    const truncateText = (text) => {
        return (text.length  > 35 && !showAllTask) ? text.substring(0, 20) + "..." : text;
        }

    const showTask = ()=>{
        setShowAllTask(!showAllTask)
        }

    const handleDeleteTask = async (id) =>{
        try{
            await api.delete(`tasks/${id}`)
        }catch(error){
            console.log(error)
        }
    }
    const handleCheckButton = async (id) => {
        const data =  taskList.find(e => e.id === id)
        
        const updateData = {task_content:data.task_content , isChecked:!data.isChecked}

        try{
            await api.put(`tasks/${id}`, updateData)
        }catch(error){
            console.log(error)
        }

    }


    return (
        <section className="border rounded-md flex justify-center items-center mt-2 p-4 w-full ">
            {(taskList.length == 0) ? <img src="../public/empty.svg" alt="" /> : 
            <ul className="space-y-2 overflow-y-auto max-h-48 p-3 w-full flex flex-col items-center">    
                
                   { taskList.map((e) => 
                        <li key={e.id}
                            className="p-1 w-full border-gray-400 border rounded-md flex items-center justify-between">
                            <button 
                            className={(e.isChecked) ? 
                                "" : 
                                "bg-none border-4 rounded-full w-5 h-5"}
                                onClick={()=> handleCheckButton(e.id)}>{e.isChecked ? <FaCheck className="mx-auto"/> : ""}</button>

                                <p 
                                    className={e.isChecked ? "line-through italic break-words max-w-64" : "break-words max-w-64"}
                                    onClick={showTask}>
                                    {truncateText(e.task_content)}
                                </p>
                             
                            <button onClick={()=>handleDeleteTask(e.id)} className="bg-red-800 rounded-full w-5 h-5 text-white"><BsTrash className="mx-auto" /></button>
                            </li>) }


                
            </ul>}

        </section>
    );
}

export default TasksList;
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

function TasksList() {
    const [checkBttn, setCheckBttn] = useState(false);
    const [page, setPage] = useState(1);
    const task= (["iidiw","wddwsdw"]);
    const taskList = ([
        {
        id: 1,
        taskContent:"tarefa 1",
        check: false
        },
        {
        id: 2,
        taskContent:"tarefa 1",
        check: false
        },
        {
        id: 3,
        taskContent:"tarefa 1",
        check: false
        }
    ])


    function checkButton(){
          setCheckBttn(!checkBttn)
    }



    function nextPage() {
        if(page <  task.length /5){
        setPage(prevPage =>prevPage +1);
        }
    }
    function prePage() {
        if(page > 1){
        setPage(prevPage =>prevPage -1)
    }
    }
    return (
        <section className="border rounded-md flex justify-center items-center mt-2 p-4 w-full ">
            {(task.length == 0) ? <img src="../public/empty.svg" alt="" /> : 
            <ul className="space-y-2  w-full flex flex-col items-center">    
                
                   { taskList.map((e) => 
                        <li key={e.id}
                            className="p-1 w-full border-gray-400 border rounded-md flex items-center justify-between">
                            <button 
                            className={(checkBttn) ? 
                                "bg-green-800 rounded-full w-5 h-5 text-white" : 
                                "bg-none border-4 rounded-full w-5 h-5 border-gray-400"}
                                onClick={checkButton}>{checkBttn ? <FaCheck className="mx-auto"/> : ""}</button>
                                <p className={checkBttn ? "line-through italic" : ""}>{e.taskContent}</p>
                            <button className="bg-red-800 rounded-full w-5 h-5 text-white"><BsTrash className="mx-auto" /></button>
                            </li>) }
                    <section className="flex text-center text-bold mt-1 space-x-2">
                        <button onClick={prePage} className="bg-green-800  px-3 rounded"><MdNavigateBefore  /></button>
                        <p>{page}</p>
                        <button onClick={nextPage} className="bg-green-800  px-3 rounded"><MdNavigateNext /></button>
                    </section>

                
            </ul>}

        </section>
    );
}

export default TasksList;
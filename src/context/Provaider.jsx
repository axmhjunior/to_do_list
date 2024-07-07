import { useState } from "react";
import { AppContext } from "./AppContext";

const Provaider = ({children}) => {

    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState([])

    const value = {
        taskList, 
        setTaskList,
        newTask, 
        setNewTask
    }
    return ( 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
     );
}
 
export default Provaider;
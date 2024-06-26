import { useState } from "react";



function Form() {

    const [value, setValue] =useState();

    function getvalue(event) {
        setValue(event.target.value)
    }

    function getTask(event){
        event.preventDefault();
        if(value.length != 0){
            console.log(value)
            setValue('')
        }
    }

    return ( 
        <form className="space-x-3">
            <input type="text" onChange={getvalue} className="rounded-xl px-2 border-[#e6b7eca1] border-2 bg-transparent outline-none" placeholder="Type a task..."  />
            <button type="submit" onClick={getTask} className="border px-1 rounded border-green-800 bg-white">S</button>
        </form>
     );
}

export default Form;
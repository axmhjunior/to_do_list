import { useState } from "react";
import { CiUser,CiLock } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
function LoginInputs() {

    const [textUsername,setTextUsername] = useState()
    const [textPassword,setTextPassword] = useState()

    function handleTextUsername(event){
        setTextUsername(event.target.value)
    }
    function handleTextPassword(event){
        setTextPassword(event.target.value)
    }

    function getTexts(event){
        event.preventDefault();
        if(textUsername.trim() !== '' || textPassword.trim() !== ''){
            console.log("Username ", textUsername)
            console.log("Password ", textPassword)
        }
    }

    return ( 
        <form className="space-y-3 flex  flex-col items-center">
            <div className="flex space-x-1">
                <CiUser className="text-3xl text-gray-400"/>
            <input type="text" onChange={handleTextUsername} 
            className="rounded-xl px-2 border-[#e6b7eca1] border-2 bg-transparent outline-none" 
            placeholder="Username" 
            /></div>

            <div className="flex space-x-1">
                <CiLock className="text-3xl text-gray-400"/>
            
            <input type="password" onChange={handleTextPassword} 
            className="rounded-xl px-2 border-[#e6b7eca1] border-2 bg-transparent outline-none" 
            placeholder="Password"  />
            </div>
            <button type="submit" onClick={getTexts} 
            className="border p-1 bg-green-800 w-20 rounded border-green-800">Login</button>
            <a href="#" className="text-gray-400 text-xs">Forgot the password?</a>
        </form>
     );
}

export default LoginInputs;
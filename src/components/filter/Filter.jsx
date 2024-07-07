import { NavLink } from "react-router-dom";

function Filter() {
    const linkActive = 'border-2 rounded-2xl mb-3 p-1 h-10  w-24 border-purple-100'
    const linkInactive = 'border-2 rounded-2xl mb-3 p-1 h-10  w-24'
    return ( 
        <nav className="space-x-2 flex flex-wrap justify-center mt-2 text-center">
            <NavLink to={'/'} className={({isActive}) =>  `${isActive ? linkActive : linkInactive}`} >All</NavLink>
            <NavLink to={'completeTasks'} className={({isActive}) =>  `${isActive ? linkActive : linkInactive}`}>Complete</NavLink>
            <NavLink to={'incompleteTasks'} className={({isActive}) =>  `${isActive ? linkActive : linkInactive}`}>Incomplete</NavLink>
        </nav>
     );
}

export default Filter;
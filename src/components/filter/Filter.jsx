function Filter() {
    return ( 
        <nav className="space-x-2 flex flex-wrap justify-center mt-2">
            <button id="menu-cmd">Complete</button>
            <button id="menu-cmd">Incomplete</button>
            <button id="menu-cmd">Delete All</button>
            <button id="menu-cmd">Historic</button>
        </nav>
     );
}

export default Filter;
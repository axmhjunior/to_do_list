import Filter from "../../components/filter/Filter";
import Form from "../../components/form/Form";
import TasksList from "../../components/tasksList/TasksList";

function Home() {
    return ( 
        <div className='border rounded p-4 items-center flex flex-col justify-center'>
        <Form/>
        <Filter/>
        <TasksList/>
      </div>
     );
}

export default Home;
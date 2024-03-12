import { useEffect, useState } from "react"
import { getAllTodos } from "../services/TodoServices";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {

    const [todos,setTodos] =  useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        listTodos();
    },[])

    function listTodos(){
        getAllTodos().then(response => 
                setTodos(response.data)
            ).catch((e)=> console.error(e));
    }

    function addTodoHandler(){
        navigate("/add-todo");
    }


  return (
    <div className="container">
        <h2 className="text-center">List of Todos</h2>
        <button className="btn btn-primary mb-2" onClick={addTodoHandler}>Add Todo</button>
        <div >
            <table className="table table-border table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo=>
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YES' : 'NO'}</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ListTodoComponent
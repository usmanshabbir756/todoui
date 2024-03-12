import { useEffect, useState } from "react"
import { completeTodo, deleteTodo, getAllTodos, inCompleteTodo } from "../services/TodoServices";
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
    function updateTodo(id){
        navigate(`/update-todo/${id}`);
    }
    function removeTodo(id){
        deleteTodo(id).then(()=>{
            listTodos();
        }).catch(error=>console.error(error))
    }
    function markCompleteTodo(id){
        completeTodo(id).then(()=>{
            listTodos();
        }).catch(error=>console.error(error))
    }
    function markInCompleteTodo(id){
        inCompleteTodo(id).then(()=>{
            listTodos();
        }).catch(error=>console.error(error))
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo=>
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YES' : 'NO'}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={()=>updateTodo(todo.id)}>Update</button>
                                        <button className="btn btn-danger" onClick={()=>removeTodo(todo.id)} style={{marginLeft:"10px"}}>Delete</button>
                                        <button className="btn btn-success" onClick={()=>markCompleteTodo(todo.id)} style={{marginLeft:"10px"}}>Complete</button>
                                        <button className="btn btn-success" onClick={()=>markInCompleteTodo(todo.id)} style={{marginLeft:"10px"}}>InComplete</button>
                                    </td>
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
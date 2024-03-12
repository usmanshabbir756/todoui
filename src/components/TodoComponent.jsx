import { useEffect, useState } from "react"
import { getTodo, saveTodo, updateTodo } from "../services/TodoServices";
import { useNavigate, useParams } from "react-router-dom";

const TodoComponent = () => {
    const [title , setTitle ] = useState('');
    const [description , setDescription ] = useState('');
    const [completed , setCompleted ] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    function saveOrUpdateTodo(e){
        e.preventDefault();
        const todo={title,description,completed}
        if(id){
            updateTodo(id,todo).then((response)=>{
                console.log(response.data)
                navigate("/todos")
            }).catch(error=>console.error(error))
        }
        else{
            saveTodo(todo).then(
                (response)=>{
                    console.log(response.data)
                    navigate("/todos")
                }
            ).catch((error) => console.error(error))
        }
    }

    
    function pageTitle(){
        if(id){
            return <h2 className="text-center">Update Todo</h2>
        }
        else{
            return <h2 className="text-center">Add Todo</h2>
        }
    }

    useEffect(()=>{
        if(id){
            getTodo(id).then((response)=>{
                console.log(response.data)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setCompleted(response.data.completed)
            }).catch(error=> console.error(error))
        }
    },[id])



  return (
    <div className="container">
        <br /> <br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {pageTitle()}
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">Todo Title:</label>
                            <input type="text"
                                placeholder="Enter Todo Title"
                                className="form-control"
                                name="title"
                                value={title}
                                onChange={e=> setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Todo Description:</label>
                            <input type="text"
                                placeholder="Enter Todo Description"
                                className="form-control"
                                name="description"
                                value={description}
                                onChange={e=> setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Todo Completed:</label>
                            <select name="completed"
                                value={completed}
                                className="form-control"
                                onChange={e=>setCompleted(e.target.value)}
                            >
                                <option value="false">NO</option>
                                <option value="true">YES</option>

                            </select>
                        </div>
                        <button className="btn btn-success" onClick={e=> saveOrUpdateTodo(e)}>Submit</button>
                    </form>
                </div>

            </div>

        </div>

    </div>
  )
}

export default TodoComponent
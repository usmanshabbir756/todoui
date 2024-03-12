import { useState } from "react"
import { saveTodo } from "../services/TodoServices";
import { useNavigate } from "react-router-dom";

const TodoComponent = () => {
    const [title , setTitle ] = useState('');
    const [description , setDescription ] = useState('');
    const [completed , setCompleted ] = useState(false);
    const navigate = useNavigate();

    function saveOrUpdateTodo(e){
        e.preventDefault();
        const todo={title,description,completed}
        saveTodo(todo).then(
            (response)=>{
                console.log(response.data)
                navigate("/todos")
            }
        ).catch((error) => console.error(error))

    }

  return (
    <div className="container">
        <br /> <br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h2 className="text-center">Add Todo</h2>
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
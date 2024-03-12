import { useState } from "react"

const ListTodoComponent = () => {

    const dummyData = [
        {
            "id":1,
            "title":"Learn java",
            "description": "Learn java with example",
            "completed":false
        },
        {
            "id":2,
            "title":"Learn react",
            "description": "Learn react with example",
            "completed":false
        },
        {
            "id":3,
            "title":"Learn spring",
            "description": "Learn spring with example",
            "completed":false
        }
    ]

    const [todos,setTodos] =  useState(dummyData);


  return (
    <div className="container">
        <h2 className="text-center">List of Todos</h2>
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
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderCompnent from './components/HeaderCompnent'
import ListTodoComponent from './components/ListTodoComponent'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderCompnent />
        <Routes>
          {/* http://localhost:3000/ */}
          <Route path='/' element={<ListTodoComponent />}></Route>
          {/* http://localhost:3000/todos */}
          <Route path='/todos' element={<ListTodoComponent />}></Route>
          {/* http://localhost:3000/add-todo */}
          <Route path='/add-todo' element = {<TodoComponent />}></Route>
          {/* http://localhost:3000/update-todo */}
          <Route path='/update-todo/:id' element = {<TodoComponent />}></Route>
          {/* http://localhost:3000/register */}
          <Route path='/register' element = {<RegisterComponent/>}></Route>
          {/* http://localhost:3000/login */}
          <Route path='/login' element = {<LoginComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App

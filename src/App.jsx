import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderCompnent from './components/HeaderCompnent'
import ListTodoComponent from './components/ListTodoComponent'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderCompnent />
        <Routes>
          <Route path='/' element={<ListTodoComponent />}></Route>
          <Route path='/todos' element={<ListTodoComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App

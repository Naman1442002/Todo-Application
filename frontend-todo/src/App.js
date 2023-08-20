
import './App.css';
import { Route,Routes } from 'react-router-dom';
import MyApp from './Component/MyApp';
import CreateTodo from './Component/CreateTodo';
import TodoList from './Component/TodoList';
import EditTodo from './Component/EditTodo';
function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<MyApp/>} >
          <Route path='/' element={<CreateTodo/>}/>
          <Route path='/TodoList' element={<TodoList/>}/>
          <Route path='/EditTodo/:id' element={<EditTodo/>}/>
        </Route>
      </Routes>
   </>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoListUnit from './TodoListUnit';
function TodoList() {
  const [TodoList, setTodoList] = useState([]);
 
  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await axios.get("https://shivtodo.onrender.com/todo")
        setTodoList(resp.data);
      }
      catch (err) {
        console.log(err);
      }

    }
    fetch();
  }, [])
  return (
    <>


      <h1 className='Heading' style={{ textAlign: 'center', marginTop: '2rem', }}>YOUR TODO</h1>
      <div className='TodoList'>
        <div>
          {(TodoList.length > 0) ? (
            <tr>
              <th>Task</th>
              <th>Responsibility</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>) : (<h1>NO TODO!</h1>)
          }
          {
            (TodoList.length > 0) ?
              (TodoList.map((todo) => {
                return <TodoListUnit {...todo} />
              })) : ''

          }
        </div>
      </div>
    </>
  )
}

export default TodoList
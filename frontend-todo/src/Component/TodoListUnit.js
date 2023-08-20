import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

function TodoListUnit(props) {
  const DeleteTodo=async()=>
  {
    const deleteDoc=  await axios.delete("http://localhost:8080/todo/delete/"+props._id).then(() => window.location.reload());
    console.log(deleteDoc);
  }


  return (
    <>
        <tr>
          <td className={(props.complete===true)?'completed':''}>
            {props.task}
          </td>
          <td className={(props.complete===true)?'completed':''}>
            {props.responsibility}
          </td>
          <td className={(props.complete===true)?'completed':''}>
            {props.description}
          </td>
          
          <td>
          <Link to={`/EditTodo/`+props._id}><FaEdit/></Link>
          </td>
          <td>
          <Link onClick={DeleteTodo}><MdDelete/></Link>
          </td>
        </tr>
    </>
  )
}

export default TodoListUnit
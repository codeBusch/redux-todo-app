import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {handleCompleted, deleteTodo,selectFilteredTodos} from "../redux/todos/todosSlice"
function TodoList() {
   
    const dispatch = useDispatch();
    const filteredItems = useSelector(selectFilteredTodos)

    
    return (
    <ul className="todo-list"> 
        {
            filteredItems.map((item)=>( 
            <li key={item.id} className={item.completed ? "completed" : ""}>
                <div className="view" >
                    <input className="toggle" type="checkbox" checked={item.completed}
                    onChange={()=> dispatch(handleCompleted({id:item.id}))}
                     />
                    <label>{item.title}</label>
                    <button className="destroy" onClick={()=>dispatch(deleteTodo(item.id))}></button>
                </div>
            </li>
            ))
        }
      
    </ul>
  )
}

export default TodoList
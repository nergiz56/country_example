import { useState } from "react";
import { FaCheck } from "react-icons/fa";


export default function Todo({todo, onRemoveTodo,onUpdateTodo}){

    const {id, content} = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }

   const updateTodo = () => {
    const request = {
        id : id,
        content : newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
   }


    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    return(

            <div className="todo-item">

                <p>
                    {
                        editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" className="todo-input-edit"/> : content
                    }
                </p>

                <div className="todo-actions">
                <button onClick={removeTodo} className="delete-btn">🗑️</button>
                {
                    editable ? (
                        <FaCheck className="edit-check" onClick={updateTodo} />
                      ) : (
                        <button className="edit-btn" onClick={() => setEditable(true)}>
                          ✏️
                        </button>
                      )
                }
                

                </div>
            </div>
        


    )
}
import { useState } from "react";


export default function TodoCreate({onCreateTodo}) {

    const [newTodo, setNewTodo] = useState('')

    const clearInput = () => {
        setNewTodo(" ");
    }

    const createTodo = () => {
        if(!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        }
        onCreateTodo(request);
        clearInput();
    }

    return(

        <div className="todo-container">
            <div className="todo-input-section" >

                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    type="text" placeholder="Add your items" className="todo-input"
                />
                <button 
                onClick={createTodo}
                className="todo-add-btn">+
                </button>

            </div>

            <p className="success-message">Todo item Created Successfully!</p>



            
        </div>

    )
}
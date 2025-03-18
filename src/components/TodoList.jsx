import React from "react"
import Todo from './Todo.jsx'

export default function TodoList({todos, onRemoveTodo}){


    return(


        
        <div className="todo-list">
            {
                todos && todos.map((todo) =>
                    <Todo key={todo.id} todo = {todo} onRemoveTodo = {onRemoveTodo} />

                )
            }
        </div>


    )

}
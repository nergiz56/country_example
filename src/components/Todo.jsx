

export default function Todo({todo, onRemoveTodo}){

    const {id, content} = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    return(

            <div className="todo-item">
                <p>{content}</p>
                <div className="todo-actions">
                <button className="edit-btn">✏️</button>
                <button onClick={removeTodo} className="delete-btn">🗑️</button>
                </div>
            </div>
        


    )
}

export default function Todo({todo}){

    const {id, content} = todo;

    return(

        
            <div className="todo-item">
                <p>{content}</p>
                <div className="todo-actions">
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
                </div>
            </div>
        


    )
}
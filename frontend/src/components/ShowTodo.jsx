export function ShowTodo ({todos}) {
    console.log(todos);
    return (
    
      <div>
        {todos.todos && Object.values(todos.todos).map((todo) => (
          <div key={todo._id}>
            <h1>{todo.title.toString()}</h1>
            <h2>{todo.description.toString()}</h2>
            <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
          </div>
       ))}
    </div>
    );
}
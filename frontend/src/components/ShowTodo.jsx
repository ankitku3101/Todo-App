export function ShowTodo ({todos}) {
    
    console.log(todos);

    return (
        <div>
          {Object.values(todos).map((todo) => (
            <div key={todo._id}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
            </div>
          ))}
        </div>
      );
}
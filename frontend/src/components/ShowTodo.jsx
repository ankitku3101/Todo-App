export function ShowTodo ({todos}) {
    console.log(todos);
    return (
        <div>
          <>
            {Object.keys(todos).map((todoId) => (
              <div key={todos[todoId]._id}>
                <h1>{console.log('h1 rendered todo', todos[todoId].title)}</h1>
                <h2>{console.log('h2 todo desc render', todos[todoId].description)}</h2>
                <button>{todos[todoId].completed ? "Completed" : "Mark as Complete"}</button>
              </div>
            ))}
         </>
      </div>
      );
}
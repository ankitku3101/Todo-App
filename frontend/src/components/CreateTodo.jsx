import { useState } from 'react'
import axios from 'axios'

export function CreateTodo({setTodos}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        
        <input id='title' style={{
            padding: 10,
            margin: 10
        }} type='text' placeholder='title' onChange={function(e) {
            const value = e.target.value;
            setTitle(value);
        }} ></input> <br /> 

        <input id='description' style={{
            padding: 10,
            margin: 10
        }} type='text' placeholder='description' onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
        }}></input> <br />
        
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            axios.post("http://localhost:3000/todo", {
            title: title,
            description: description
        }, {
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(async function(response) {
                alert("Todo added");
                const re = await axios.get("http://localhost:3000/todos")
                const dataPromise = re.data
                // setTodos(respo)
                setTodos(dataPromise)
            })
            .catch(function(error) {
                console.error("Error adding todo:", error);
            });
        }}>Add a Todo</button>
    
        
    </div>
}
import { useRef, useState } from "react";
import TodoList from "./List";
import { createTodo } from "../lookups";

function TodoCreateUpdateForm(props) {
  const [newTodos, setNewTodos] = useState([]);
  const titleInput = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const newVal = titleInput.current.value;
    let tempNewTodos = [...newTodos];
    createTodo(newVal, (response, status) => {
      if (status === 201) {
        tempNewTodos.unshift(response);
      } else {
        console.log(response);
        alert("An error occured please try again");
      }
    });

    setNewTodos(tempNewTodos);
    titleInput.current.value = "";
  }
  return (
    <div className="container">
      <h1>Todo list</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              ref={titleInput}
              required
              maxLength={250}
              className="form-control"
            />
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <TodoList newTodos={[]} />
    </div>
  );
}

export default TodoCreateUpdateForm;

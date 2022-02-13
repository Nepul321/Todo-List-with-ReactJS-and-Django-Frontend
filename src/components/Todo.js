import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { todoDetails } from "../lookups";
import { updateTodo } from "../lookups/lookups";

function Todo() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const titleref = useRef();
  const completedref = useRef();
  useEffect(() => {
    todoDetails(id, (response, status) => {
      if (status === 200) {
        setTodo(response);
      } else if (status === 404) {
        alert("Todo not found");
        window.location.href = "/";
      } else {
        alert("An error occurred");
        console.log(response);
      }
    });
  });

  if (todo) {
    titleref.current.defaultValue = todo.title;
    completedref.current.defaultChecked = todo.completed;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const title = titleref.current.value;
    const completed = completedref.current.checked;
    let todoid;
    if (todo) {
      todoid = todo.id;
    }
    todoid = id;
    updateTodo(title, todoid, completed, (response, status) => {
      if (status === 200) {
        setTodo(response);
      } else if (status === 404) {
        alert("Todo not found");
        window.location.href = "/";
      } else {
        alert("An error occurred");
      }
    });
  }
  return (
    <div className="container my-5">
      <h1>Todo list</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            required
            maxLength={250}
            id="title"
            ref={titleref}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="checked">Completed : </label>
          <br />
          <input type="checkbox" id="checked" ref={completedref} />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
      <br /> <br />
      <a href="/" className="btn btn-secondary">
        Back to home
      </a>
    </div>
  );
}

export default Todo;

import ListItem from "./ListItem";
import { loadTodos } from "../lookups";
import { useEffect, useState } from "react";

function TodoList(props) {
  const [todosInit, setTodosInit] = useState([]);
  const [todos, setTodos] = useState([]);
  const [todosDidSet, setTodosDidSet] = useState(false);
  useEffect(() => {
    const final = [...props.newTodos].concat(todosInit);
    if (final.length !== todos.length) {
      setTodos(final);
    }
  }, [props.newTodos, todos, todosInit]);

  useEffect(() => {
    setInterval(() => {
      if (todosDidSet === false) {
        const myCallback = (response, status) => {
          if (status === 200) {
            setTodosInit(response);
            setTodosDidSet(true);
          } else {
            console.log("An error occurred");
          }
        };
        loadTodos(myCallback);
      }
    });
  }, [todosInit, todosDidSet, setTodosDidSet]);

  return (
    <div className="todolist">
      {todos.map((item, key) => {
        return <ListItem todo={item} key={key} />;
      })}
    </div>
  );
}

export default TodoList;

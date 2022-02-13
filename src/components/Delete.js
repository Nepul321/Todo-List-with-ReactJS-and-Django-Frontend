import { deleteTodo } from "../lookups";

function DeleteTodo(props) {
  const { id } = props;
  function deleteTodos(id) {
    deleteTodo(id, (response, status) => {
      if (status === 200) {
        alert(response.detail);
      } else if (status === 404) {
        alert(response.detail);
      } else {
        alert("An error occurred");
      }
    });
  }
  return (
    <button onClick={() => deleteTodos(id)} className="btn btn-danger">
      Delete
    </button>
  );
}

export default DeleteTodo;

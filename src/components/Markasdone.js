import { markTodoasDone } from "../lookups";

function MarkasCompleted(props) {
  const { id } = props;
  const { todo } = props;
  function MarkTodoasCompleted(id) {
    markTodoasDone(todo.title, id, (response, status) => {
      if (status === 200) {
        alert("Todo marked as done");
        console.log(response);
        window.location.reload();
      } else if (status === 404) {
        window.location.reload();
      } else {
        alert("An error occurred");
      }
    });
  }
  return (
    <button
      onClick={() => MarkTodoasCompleted(id)}
      className="btn btn-secondary"
    >
      Mark as done
    </button>
  );
}

export default MarkasCompleted;

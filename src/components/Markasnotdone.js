import { markTodoasNotDone } from "../lookups";

function MarkasNotCompleted(props) {
  const { id } = props;
  const { todo } = props;
  function MarkTodoasNotDone(id) {
    markTodoasNotDone(todo.title, id, (response, status) => {
      if (status === 200) {
        alert("Marked as not done");
        window.location.reload();
        console.log(response);
      } else if (status === 404) {
        alert("Todo not found");
        console.log(response);
      } else {
        alert("An error occurred");
        console.log(response);
      }
    });
  }
  return (
    <button onClick={() => MarkTodoasNotDone(id)} className="btn btn-secondary">
      Mark as not done
    </button>
  );
}

export default MarkasNotCompleted;

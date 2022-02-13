import Delete from "./Delete";
import MarkasCompleted from "./Markasdone";
import MarkasNotCompleted from "./Markasnotdone";

function ListItem(props) {
  const { todo } = props;
  const url = `/todo/${todo.id}/`;
  return (
    <div className="card my-3">
      <div className="card-body">
        <p>
          <a href={url}>{todo.title}</a>
        </p>
        {todo.completed === true ? <p>Completed</p> : <p>Not Completed</p>}
        <div className="btn-group">
        <Delete id={todo.id} />
        {todo.completed === false ? (
          <MarkasCompleted id={todo.id} todo={todo} />
        ) : (
          <MarkasNotCompleted id={todo.id} todo={todo} />
        )}
        </div>
      </div>
    </div>
  );
}

export default ListItem;

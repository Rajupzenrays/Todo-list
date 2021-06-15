import PropTypes from "prop-types";
import './TodoFooter.css'
function TodosFooter(props) {
  return (
    <div className="mainFooter">
      <p className="" data-testid="total-tasks-count">
        {props.totalTasks} {props.totalTasks === 1 ? "Total Task" : "Total Task"}
      </p>
      <p
        className=""
        data-testid="completed-tasks-count"
      >
        {props.doneTasks} Completed Task
      </p>
      <p
        className=""
        data-testid="open-tasks-count"
      >
        {props.totalTasks - props.doneTasks} Remaining Task
      </p>
    </div>
  );
}

TodosFooter.propTypes = {
  totalTasks: PropTypes.number.isRequired,
  doneTasks: PropTypes.number.isRequired,
};

export default TodosFooter;

import Task from "./Task";

const Tasks = ({ task, setTask, handleDelete }) => {
  return (
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
      <Task task={task} setTask={setTask} handleDelete={handleDelete} />
    </div>
  );
};

export default Tasks;

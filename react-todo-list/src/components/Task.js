import { AiFillDelete } from "react-icons/ai";

const Task = ({ task, setTask, handleDelete }) => {
  // console.log(task);
  // console.log(handleDelete);
  return (
    <div>
      <div className="task">
        {task.length > 0 ? (
          task.map((item, index) => {
            return (
              <div
                key={index}
                className="d-flex justify-content-between my-2 rounded-2 p-1 background"
              >
                <div className="d-flex flex-column">
                  <p className="mb-0">{item.text}</p>
                  <p className="mb-0">{item.daytime}</p>
                </div>
                <div>
                  <AiFillDelete onClick={() => handleDelete(item.id)} />
                </div>
              </div>
            );
          })
        ) : (
          <h4 className="text-center text-white py-2">No task to show</h4>
        )}
        <p></p>
      </div>
    </div>
  );
};

export default Task;

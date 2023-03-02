import AddTask from "./components/AddTask";
import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="App pt-5">
      <div className="container rounded-2 col-10 col-md-8 col-xl-6 pb-3">
        <Header />
        <Button handleShow={handleShow} show={show} />
        {show && (
          <div>
            <AddTask task={task} setTask={setTask} />
            <Tasks task={task} setTask={setTask} handleDelete={handleDelete} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

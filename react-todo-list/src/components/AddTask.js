import { useState } from "react";

const AddTask = ({ task, setTask }) => {
  const [formData, setFormData] = useState({
    text: "",
    daytime: "",
    // id vermezsek silerken sorun oluyor. verileri biz oluşturduğumuz için id yi de biz verdik.
    id: new Date().getTime(),
  });

  const { text, daytime } = formData;

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, formData]);
    setFormData({ text: "", daytime: "" });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex align-items-center flex-column"
      >
        <div className="d-flex flex-column col-12 col-sm-10 col-md-8 col-lg-6 pb-3">
          <label className="fw-bold" htmlFor="task">
            Task
          </label>
          <input
            required
            className="p-1 rounded-2 border border-none"
            type="text"
            id="text"
            placeholder="Add task"
            onChange={handleFormData}
            value={text}
          />
        </div>

        <div className="d-flex flex-column col-12 col-sm-10 col-md-8 col-lg-6 pb-3">
          <label className="fw-bold" htmlFor="daytime">
            Day & Time
          </label>
          <input
            required
            className="p-1 rounded-2 border border-none"
            type="date"
            id="daytime"
            placeholder="Add day and time"
            onChange={handleFormData}
            value={daytime}
          />
        </div>

        <div className="text-center col-12 col-sm-10 col-md-8 col-lg-6">
          <button type="submit" className="btn text-white bg-primary w-100">
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;

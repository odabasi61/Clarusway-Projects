const AddTask = () => {
  return (
    <div>
      <form className="d-flex align-items-center flex-column">
        <div className="d-flex flex-column col-12 col-sm-10 col-md-8 col-lg-6 pb-3">
          <label className="fw-bold" htmlFor="task">
            Task
          </label>
          <input
            className="p-1 rounded-2 border border-none"
            type="text"
            id="task"
            placeholder="Add task"
          />
        </div>

        <div className="d-flex flex-column col-12 col-sm-10 col-md-8 col-lg-6 pb-3">
          <label className="fw-bold" htmlFor="daytime">
            Day & Time
          </label>
          <input
            className="p-1 rounded-2 border border-none"
            type="text"
            id="daytime"
            placeholder="Add day and time"
          />
        </div>

        <div className="text-center col-12 col-sm-10 col-md-8 col-lg-6">
          <button className="btn text-white bg-primary w-100">Save Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;

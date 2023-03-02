const Button = ({ handleShow, show }) => {
  return (
    <div className="text-center pb-4">
      <button
        className="btn text-white bg-danger rounded-2 px-2"
        onClick={handleShow}
      >
        {show ? "Close Add Task Bar" : "Open Add Task Bar"}
      </button>
    </div>
  );
};

export default Button;

import AddTask from "./components/AddTask";
import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App pt-5">
      <div className="container rounded-2 col-10 col-md-8 col-xl-6">
        <Header />
        <Button />
        <AddTask />
        <h4 className="text-center text-white py-2">No task to show</h4>
        <Tasks />
      </div>
    </div>
  );
}

export default App;

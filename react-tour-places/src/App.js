import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Card";
import { data } from "./helper/data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container">
        {data.map(({ id, title, desc, image }) => (
          <Card key={id} title={title} desc={desc} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;

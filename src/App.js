import Card from "./components/Card.js";
import Nav from "./components/Nav.js";
import data from "./data";

function App() {
  
  const cardItems = (item) => {
    return <Card {...item} />;
  };

  const cards = data.map(cardItems);

  return (
    <div className="App">
      <Nav />
      <div> {cards}</div>
    </div>
  );
}

export default App;

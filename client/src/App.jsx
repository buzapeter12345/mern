import './App.css';
import Osztaly from './components/Osztaly';

function App() {
  const name = "Péter";
  const h1Style = { color: "red", fontSize: "2em", padding: "1em" };
  const classes = [
    {
    osztaly: "13SZFT", 
    diakokSzama: 25, 
    bejaroDiakokSzama: 13,
    kep: './images/elso.jpg'
  },
  {
    osztaly: "14SZFT",
    diakokSzama: 21,
    bejaroDiakokSzama: 8,
    kep: './images/masodik.jpg'
    }];

  return (
    <div className="App">
      <h1>Első fejléc</h1>
      <p style={h1Style}>Hello {name}!</p>
      <ul>
        {classes.map((elem, index) => (
         <Osztaly key={index} elem={elem} />
        ))}
      </ul>
    </div>
  );
}

export default App;
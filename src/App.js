import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [coffee, setCoffee] = useState({}); 
  const [count, setCount] = useState(0); 
  const generateRandomCoffee = (e) => {
    e.preventDefault();
    // fetchRandomCoffee();
    setCount(count + 1);
  }
  const fetchRandomCoffee = async () => {
    const url = 'https://random-data-api.com/api/coffee/random_coffee';
    try {
      const res = await fetch(url)
      const json = await res.json();
      console.log(json);
      setCoffee({
        name: json.blend_name,
        origin: json.origin,
        notes: json.notes
      })
    } catch(err) {
      console.log('err', err)
    }
  }
  useEffect(() => {
    fetchRandomCoffee();
  }, [count])
  return (
    <div className="App">
      <div>random coffee generated: {count}</div>
      <div>{coffee.name}</div>
      <div>{coffee.origin}</div>
      <div>{coffee.notes}</div>
      <button onClick={(e) => generateRandomCoffee(e)}>new random coffee</button>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter.jsx'
import Button from "./components/Button";

function App() {

  const[count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} />
      <Button title="increment" onClick={() => setCount(count + 1)} />
      <Button title="Decrement" onClick={() => setCount(count - 1)} />
    </div>
  );
}

export default App;
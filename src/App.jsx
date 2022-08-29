import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)
  const resetCount = () => setCount(0);

  return (
   <>
     <div className="container">
      <div className="heading">React Counter</div>
      <div className="count">{count}</div>
      <div className="btn-container">
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={resetCount}>Reset</button>
        <button className="btn" onClick={decrement}>Decrement</button>
      </div>
     </div>
   </>
  );
}

export default App;

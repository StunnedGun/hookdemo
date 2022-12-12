import { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  let [renders, setRenders] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current++;
  })


  return (
    <div>
      <input onChange={(e) => { setRenders(renders+1); }}></input>

      <h2>{renders}</h2>
    </div>
    
  );
}
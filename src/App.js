import { useState, useEffect} from 'react';
import './App.css';

export default function App() {

  useEffect(() => {
    console.log("after render");
  })

  const [resourceType, setResourceType] = useState('posts');
  return (
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
    </div>
    
  );
}
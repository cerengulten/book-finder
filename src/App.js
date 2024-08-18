import './App.css';
import React,{useState} from 'react';
import BookFetch from './components/api.js';
import Navbar from './components/Navbar.js';
function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <Navbar setQuery={setQuery} />
      <BookFetch query={query} />
    </div>
  );
}

export default App;

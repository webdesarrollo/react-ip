import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useEffect, useState} from 'react';

function App() {
  const [data,setData] = useState('')


  useEffect(() => {
    const url = 'https://api.ipify.org?format=json'

    axios.get(url).then(response => {
      console.log(response.data)
      setData(response.data.ip)
      return response.data
    }).catch((err) => ({
      data: null,
      error: err,
      ok: false
    }))
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ip {data}
        </a>
      </header>
    </div>
  );
}

export default App;

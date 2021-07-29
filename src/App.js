import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useEffect, useState} from 'react';

function App() {
  const [data,setData] = useState()
  const [data2,setData2] = useState()


  useEffect(() => {
    const url = 'https://api.ipify.org?format=json'

    axios.get(url).then(response => {
      console.log(response.data)
      setData(response.data.ip)
      return response.data
    }).catch((err) => {
      console.log(err)
    })
  },[]);

  useEffect(() => {
    const url = 'https://api64.ipify.org?format=json'

    axios.get(url).then(response => {
      console.log(response.data)
      setData2(response.data.ip)
      return response.data
    }).catch((err) => {
      console.log(err)
    })
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
          href="/#"
          rel="noopener noreferrer"
        >
          ip IPv4 {data}
          <br />
          <br />
          ip IPv6 {data2}
        </a>
      </header>
    </div>
  );
}

export default App;

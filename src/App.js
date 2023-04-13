import { useState, useEffect } from 'react';
import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

function App() {
  const [text, setText] = useState('');

  const changeHandler = (e) => { 
    setText(e.target.value);
  }

  useEffect(() => {
    (async() => {
      // console.log(process.env.REACT_APP_PATH);
      const path = process.env.REACT_APP_PATH
      const result = await axios.get(path)
      console.log(result);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" className="btn btn-info">Info</button>
        <p>
          {text}
        </p>
        <Input id="sampleText" changeHandler={changeHandler} value={text} text="Input function"></Input>
      </header>
    </div>
  );
}

export default App;

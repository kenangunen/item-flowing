import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextFlow from './components/text-flow';

function App() {
  const flowList = ['Ankara', 'İstanbul', 'Samsun', 'İzmir', 'Mersin'];
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <TextFlow flowList={flowList} changetime={2000}></TextFlow>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import ItemFlowing from './item-flowing/item-flowing';

function App() {
  const flowItems = ['New York', 'London', 'Paris', 'Moscow', 'Tokyo'];
  return (
    <div className='App'>
      <header className='App-header'>
        <ItemFlowing         
          flowItems={flowItems}
          changedTime={1000}
          topTime={10000}
          loop={true}
        />
      </header>
    </div>
  );
}

export default App;

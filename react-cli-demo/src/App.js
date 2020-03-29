import React from 'react';
import logo from './logo.svg';
import './App.css';
// import SuspenseDemo from './demo/suspense/index'
// import PortalDemo from './demo/portal/index'
import MemoDemo from './demo/memo/index'
// import ContextDemo from './demo/context/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MemoDemo />
      </header>
    </div>
  );
}
export default App;

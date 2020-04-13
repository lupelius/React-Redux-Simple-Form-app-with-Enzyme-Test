import React from 'react';
import Header from './components/organisms/header';
import Questions from './components/organisms/questions';
import './app.scss';

function App() {
  return (
    <div className="App" data-test="appRoot">
      <Header />
      <div className="main">
        <Questions />
      </div>
    </div>
  );
}

export default App;

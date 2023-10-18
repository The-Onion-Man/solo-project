import React from 'react';
import NavContainer from './containers/NavContainer';
// import './styles.scss';

function App() {
  return (
    <div id='app'>
      <h1 className='orangesans'>TEST UWU {new Date().toString()}</h1>
      <NavContainer></NavContainer>
    </div>
  );
}

export default App;

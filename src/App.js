import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import PokeDex from './PokeDex';

function App() {
  return (
    <div className="App">
      <Container>
          <PokeDex />
      </Container>
    </div>
  );
}

export default App;

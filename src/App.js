import React, { Component } from 'react';
import Footer from './Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const nombres = ['Ismary', 'Ely', 'Violeta', 'Adriana', 'Marcia'];
    return (
      <div>
        <h1 className="title">Abajo Angular</h1>

        <ul>
          {
            nombres.map(elementos => <li>{elementos}</li>)
          }
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;

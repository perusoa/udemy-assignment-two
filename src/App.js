import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {
  state = {
    term: 'Enter some text'
  };

  textCountHandler = (event) => {
    const term = event.target.value;
    this.setState({
      term: term
    });
  }

  deleteLetterHandler = (index) => {
    const letters = this.state.term.slice();
    const removedLetter = letters.split('');
    removedLetter.splice(index, 1);
    const newTerm = removedLetter.join('');

    this.setState({
      term: newTerm
    });
  }

  render() {

    const letters = this.state.term.split('').map((letter, index) => {
      if (letter === ' ') { return; }
      return <CharComponent clicked={() => this.deleteLetterHandler(index)} letter={letter} />
    });

    return (
      <div className="App">
        <h1>Welcome to the word splitter!</h1>
        <input onChange={this.textCountHandler} value={this.state.term} type="text" />
        <ValidationComponent termlength={this.state.term.length} />
        {letters}
      </div>
    );
  }
}

export default App;

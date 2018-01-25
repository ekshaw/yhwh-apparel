import React, { Component } from 'react';
import Main from './components/Main';
import './styles/css/App.css';
import content from './content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main content={content}/>
      </div>
    );
  }
}

export default App;

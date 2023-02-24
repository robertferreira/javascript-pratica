import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class MyButton extends Component {
  render() {
    return <button> {this.props.label}</button>
  }
}

class MyLabel extends Component {
  render() {
    return <p> {this.props.text}</p>
  }
}

function App() {

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        labelText: '',
      };
    }

    setLabelText = (labelText) => {
      this.setState({ labelText});
    }

    render() {
      return (
        <div className='App'>
          <p> Hello, World!</p>
          <MyLabel text="Escrevendo pelo app" />
          <MyButton handleClicl={this.setLabelText} label="Botão 1" />
          <MyButton handleClicl={this.setLabelText} label="Botão 2" />
          <MyButton handleClicl={this.setLabelText} label="Botão 3" />
          <MyButton handleClicl={this.setLabelText} label="Botão 4" />
        </div>
      );
    }
  }
}

export default App;

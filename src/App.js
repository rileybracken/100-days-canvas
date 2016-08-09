import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 100,
      width: 100,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false);

    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidUpdate() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = `rgba(200, 0, 0, 0.5)`;
    context.fillRect(0, 0, this.state.width, this.state.height) ;

    context.fillStyle = `rgba(0, 0, 200, 0.5)`;
    context.fillRect(20, 20, this.state.width - 40, this.state.height - 40);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        <canvas id='canvas' width={ this.state.width } height={ this.state.height }></canvas>
      </div>
    );
  }
}

export default App;

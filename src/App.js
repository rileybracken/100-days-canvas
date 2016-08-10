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
    this.animate();

    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.draw();
  }

  draw = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const halfHeight = this.state.height / 2;
    const halfWidth = this.state.width / 2;
    const quarterWidth = halfWidth / 2;

    ctx.clearRect(0, 0, this.state.width, this.state.height);

    // Outer circle
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.arc(halfWidth, halfHeight, quarterWidth, 0, Math.PI * 2, true);
    ctx.fill();

    // Square
    ctx.fillStyle = "rgba(250, 0, 0, 0.5)";
    ctx.fillRect (halfWidth, halfHeight, halfWidth, 4);

    // Rotate Context
    ctx.translate(halfWidth, halfHeight);
    ctx.rotate(Math.PI / 180);

    // Draw Line
    ctx.strokeStyle= "rgb(255, 255, 255)";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(quarterWidth, 0);
    ctx.stroke();

    // Put Context back
    ctx.translate(-halfWidth, -halfHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <canvas id='canvas' width={ this.state.width } height={ this.state.height }></canvas>
    );
  }
}

export default App;

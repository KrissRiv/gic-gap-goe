import React, { Component } from 'react';
import './History.css';

class History extends Component {
  render() {
    return (
      <section className="history">
        <div className="history-status">{this.props.status}</div>
        <ol className="history-list">{this.props.moves}</ol>
      </section>
    );
  }
}

export default History;
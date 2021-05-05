import React, {Component} from 'react'
import Chip from '../../Atoms/Chip';
import './Table.css';

class Table extends Component {
  renderChip(i) {
    return (
      <Chip
        value={this.props.chips[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <section className="table">
        <div className="table-row">
          {this.renderChip(0)}
          {this.renderChip(1)}
          {this.renderChip(2)}
        </div>
        <div className="table-row">
          {this.renderChip(3)}
          {this.renderChip(4)}
          {this.renderChip(5)}
        </div>
        <div className="table-row">
          {this.renderChip(6)}
          {this.renderChip(7)}
          {this.renderChip(8)}
        </div>
      </section>
    );
  }
}

export default Table;
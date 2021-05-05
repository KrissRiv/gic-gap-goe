import React, {Component} from 'react'
import Chip from '../../Atoms/Chip';

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
      <div>
        <div className="board-row">
          {this.renderChip(0)}
          {this.renderChip(1)}
          {this.renderChip(2)}
        </div>
        <div className="board-row">
          {this.renderChip(3)}
          {this.renderChip(4)}
          {this.renderChip(5)}
        </div>
        <div className="board-row">
          {this.renderChip(6)}
          {this.renderChip(7)}
          {this.renderChip(8)}
        </div>
      </div>
    );
  }
}

export default Table;
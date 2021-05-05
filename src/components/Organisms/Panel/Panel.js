import React, {Component} from 'react'
import History from '../../Molecules/History/History';
import Table from '../../Molecules/Table/Table';
import './Panel.css';

class Panel extends Component {
  render() {
    const {chips, moves, onClick, status} = this.props;
    return (
        <section className="panel">
            <Table chips={chips} onClick={onClick} />
            <History moves={moves} status={status} />
        </section>
    );
  }
}

export default Panel;
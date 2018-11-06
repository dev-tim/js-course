import React from 'react';
import LectionListItem from './LectionListItem';

function renderLectionList(lectionList = [], onLectionSelected1){
  return lectionList.map((lection) => {
    return (
      <LectionListItem lection={lection} onLectionSelected={onLectionSelected1} />
    )
  })
}

class LectionList extends React.Component {

  handleLectionSelection(lection){
    this.setState({
      selectedLection: lection
    })
  }

  render() {
      const selectedLection = this.state ? this.state.selectedLection : {};
      return (
        <div>
          <h1>Discipline front-end - {selectedLection.lection}</h1>
          <div>
            <button>Add</button>
          </div>
          {renderLectionList(this.props.items, this.handleLectionSelection.bind(this))}
        </div>
      );
    }
  }

export default LectionList;
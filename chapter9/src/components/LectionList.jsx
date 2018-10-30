import React from 'react';
import LectionListItem from './LectionListItem';

function renderLectionList(lectionList = []){
  return lectionList.map((lection) => {
    return (
      <LectionListItem lection={lection} />
    )
  })
}

class LectionList extends React.Component {
  render() {
      return (
        <div>
          <h1>Discipline front-end</h1>
          {renderLectionList(this.props.items)}
        </div>
      );
    }
  }

export default LectionList;
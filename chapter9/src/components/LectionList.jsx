import React from 'react';

function renderLectionList(lectionList = []){
  debugger;
  return lectionList.map((lection) => {
    return (
      <div>
        <div>{lection.id}</div>
        <div>{lection.lection}</div>
        <div>{lection.video}</div>
        <div>{lection.homework}</div>
      </div>
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
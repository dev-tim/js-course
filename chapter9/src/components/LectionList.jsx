import React from 'react';
import LectionListItem from './LectionListItem';
import { connect } from 'react-redux'
import LectionActions from '../actions/lection-actions';

function renderLectionList(lectionList = [], onLectionSelected1){
  return lectionList.map((lection) => {
    return (
      <LectionListItem lection={lection} onLectionSelected={onLectionSelected1} />
    )
  })
}

class LectionList extends React.Component {

  handleLectionSelection(lection){
    this.props.selectLectionAction(lection);
  }

  render() {
      const selectedLection = this.props.selectedLection ? this.props.selectedLection : {};
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

const mapStateToProps = function (state) {
  debugger
  return {
    selectedLection: state.selectedLection
  }
} 

const mapDispatchToProps = function (dispatch) {
  debugger
  return {
    selectLectionAction: (lection) => {
      debugger
      return dispatch(LectionActions.selectLection(lection))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LectionList);
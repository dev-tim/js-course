import React from 'react';

class LectionListItem extends React.Component {
  
    handleClick(e){
        const p = this.props;
        p.onLectionSelected(p.lection);
    }
    
    render() {
      const lection = this.props.lection;
      return (
        <div class="lection-item">
            <div class="lection-item__id">{lection.id}</div>
            <div class="lection-item__lection">{lection.lection}</div>
            <div class="lection-item__video">
                <a href={lection.video}>Link</a>
            </div>
            <div class="lection-item__homework">{lection.homework}</div>

            <div class="lection-item__action-button">
                <button onClick={this.handleClick.bind(this)}>I love action!</button>
            </div>

         </div>
      );
    }
  }

export default LectionListItem;
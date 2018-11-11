
import React from 'react';

class AddItem extends React.Component{
    
    handleClick(e){
        this.props.action()
        alert("Wait a minute");
    }

    render(){        
        const name = this.props.name;
        
        return(
            <div>
                <button onClick={this.handleClick.bind(this)}>{name}</button>
            </div>
        )
    }
}

export default AddItem;

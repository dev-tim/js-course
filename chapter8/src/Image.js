import React, { Component } from 'react';

class Image extends Component {
  render() {
    console.log(this.props);
    return (
        <img src={this.props.denisImage} className="App-logo" alt="logo" />
    );
  }
}

export default Image;

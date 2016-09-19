import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        Main Compontent
        {this.props.children}
      </div>
    )
  };
}

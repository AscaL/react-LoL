import React, { Component } from 'react';
import MainHeader from '../components/MainHeader'

export const styles = {
  mainContainer: {
    width: '100%',
    height: '92%'
  },
  mainHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: '5px',
  },
};

export default class Main extends Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.mainHeader}>
          Main Compontent
        </div>
        {this.props.children}
      </div>
    )
  };
}

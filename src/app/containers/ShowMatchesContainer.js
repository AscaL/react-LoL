import React, { Component } from 'react';
import ShowMatches from '../components/ShowMatches'

export default class ShowMatchesContainer extends Component {
  constructor() {
    super();
  }

  searchMatches() {

  }

  componentDidMount() {
    this.searchMatches()
  }

  render() {
    return (
    <ShowMatches />
    )
  }
}

import React, { Component } from 'react';
import SearchMatches from '../components/SearchMatches'

export default class SearchMatchesContainer extends Component {
  constructor() {
    super();
    this.handleSearchMatches = this.handleSearchMatches.bind(this)

  }

  handleSearchMatches(e) {
    e.preventDefault()
    this.context.router.push('/matches');
  }

  render() {
    return (
    <SearchMatches
      onSearchMatches={this.handleSearchMatches}
    />
    )
  }
}

SearchMatchesContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}


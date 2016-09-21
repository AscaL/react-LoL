import React, { Component } from 'react';

function Button({children, onSearchMatches}) {
  return (
    <button type='button'
      className='btn btn-success'
      onClick={onSearchMatches}>
      {children}
    </button>
  )
}

export default function SearchMatches(props) {
  return (
    <div>
      <Button
        onSearchMatches={props.onSearchMatches}>
        Search Matches
      </Button>
    </div>
  )

}

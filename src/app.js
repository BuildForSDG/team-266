import signUp from './authentication/signUp';
import React from 'react';
export default class Application extends React.Component {
  render() {
    return (
      <div className="app">
        <signUp />{' '}
      </div>
    );
  }
}

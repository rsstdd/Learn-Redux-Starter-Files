import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
        <div>
          <p>
            Hello
          </p>
        </div>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

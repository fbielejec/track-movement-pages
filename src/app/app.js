import React from 'react';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
);


ReactDOM.render(<Main />, document.getElementById('app'));

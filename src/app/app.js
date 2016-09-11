import React from 'react';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Main from './Main';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
);

const routes = (
  <Router history={hashHistory}>
    <Router path='/' component={Main}>
      <Route path='/about' component={HelloWorld} />
    </Router>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'))

// ReactDOM.render(<Main />, document.getElementById('app'));

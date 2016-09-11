import React from 'react';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Main from './Main';
import About from './About';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const Connecting = () => (
    <div>{"Connecting"}</div>
);

const Example = () => (
    <div>{"Example"}</div>
);

const Download = () => (
    <div>{"Download"}</div>
);

const routes = (
    <Router history={hashHistory}>
        <Router path='/' component={Main}>
            <Route path='/about' component={About}/>
            <Route path='/connecting' component={Connecting}/>
            <Route path='/example' component={Example}/>
            <Route path='/download' component={Download}/>
            <IndexRoute component={About}/>
        </Router>
    </Router>
)

ReactDOM.render(routes, document.getElementById('app'))

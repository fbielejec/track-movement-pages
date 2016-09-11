/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {Main } from 'containers/Main/MainContainer'

const HelloWorld = ({name}) => (
 <div>{`Hi ${name}`}</div>
);

//---MODULE EXPORTS---//

// <Router path='/' component={MainContainer}>
//   <Route path='/about' component={HelloWorld} />
//  <IndexRoute component={HelloWorld}/>

const routes = (
  <Router history={hashHistory}>
    <Router path='/' component={Main}>
    </Router>
  </Router>
)


export default routes

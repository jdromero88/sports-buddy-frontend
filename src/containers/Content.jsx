import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import Sports from './Sports'
import Users from './Users'
import About from '../components/About'
import Login from '../components/Login'
const Content = () => {
  return(
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sports' component={Sports} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </>
  )
}
export default Content

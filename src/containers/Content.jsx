import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Sports from './Sports'
import Users from './Users'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
const Content = () => {
  return(
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sports' component={Sports} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </>
  )
}
export default Content

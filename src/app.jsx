import React from 'react'
import Main from './components/main'
import Login from './components/login'
import NavBar from './components/navBar'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Users from './components/users'
// import UserPage from './components/userPage'
import ErrorPage from './components/errorPage'
import UsersPage from './components/usersPage'

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={UsersPage} />
        <Route path="/404" component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
    </>
  )
}

export default App

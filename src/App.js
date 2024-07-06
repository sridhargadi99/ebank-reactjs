import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <Route exact path="/" component={Home} />
    <NotFound />
  </Switch>
)

export default App

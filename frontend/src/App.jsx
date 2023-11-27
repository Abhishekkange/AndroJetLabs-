import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Signup from './assets/components/Signup';
import Services from './assets/components/Services';
import Projects from './assets/components/Projects';
import Login from './assets/components/Login';
import Academy from './assets/components/Academy';
import Home from './assets/components/Home';




function App() {
 

  return (
    <>
    <h1>Hello</h1>

<Router>
      <Switch>
        <Route path='/Home' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/career' element={<Projects />} />
        <Route path='/AndroJet Academy' element={<Academy />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Switch>
    </Router>

    </>
  )
}

export default App

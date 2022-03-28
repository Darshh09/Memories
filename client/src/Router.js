import React from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import { HomePage, LoginPage } from './screens'
 

const ScreenRouter = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element = {<HomePage/>}>
        </Route>
        <Route path="/login" element={<LoginPage/>} />
   </Routes>   
    </Router>
  )
}

export default ScreenRouter
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'
import 'assets/scss/argon-design-system-react.scss?v1.1.0'

import LandingPage from 'pages/LandingPage'
import ProjectsPage from 'pages/ProjectsPage'
import VolunteersPage from 'pages/VolunteersPage'
import MutualAidPage from 'pages/MutualAidPage'
import AboutEdtfPage from 'pages/AboutEdtfPage'
import HomePage from 'pages/HomePage'
import HomePageAmharic from 'pages/HomePageAmharic'
import PartnersPage from 'pages/PartnersPage'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact render={(props) => <HomePage {...props} />} />
      <Route
        path="/am"
        exact
        render={(props) => <HomePageAmharic {...props} />}
      />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

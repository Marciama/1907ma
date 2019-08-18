import React, { Component } from 'react'
import {HashRouter as Router,Redirect,Switch} from "react-router-dom"
import {routerConfig} from "@router";

import Page from "@layout";
export default class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Redirect from="/" to="/home" exact/>
              {
                routerConfig.map((item,index)=>(
                  <Page key={index} {...item}/>
                ))
              }
          </Switch>
      </Router>
    )
  }
}

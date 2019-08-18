import React, { Component} from 'react'
import {Route,Redirect} from "react-router-dom";
export default class BaseRoute extends Component {
    render() {
        let {meta,component,path} = this.props;
        if(meta.Authrequired){
            if(!sessionStorage.getItem("token")){
              return  <Redirect to="/login"/>
            }
        }
        return <Route component={component} path={path}/>
    }
}

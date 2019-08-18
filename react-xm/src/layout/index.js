import React, { Component } from 'react'
import TabBar from "@common/TabBar"
import BaseRoute from "@common/baseRoute"
export default class Layout extends Component {
  render() {
    let {meta} = this.props;
    return (
      <div>
           <BaseRoute {...this.props}/>
           {meta.tabBarFlag?<TabBar/>:''}
      </div>
    )
  }
}

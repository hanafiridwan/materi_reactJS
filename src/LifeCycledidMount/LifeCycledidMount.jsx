import React, { Component } from 'react'

export default class LifeCycledidMount extends Component {
    constructor() {
        super()
        this.state = {
            name: "Udin"
        }
        console.log("constructor")
    }

    // ini adalah lifeCycle didMount
    componentDidMount() {
        console.log("component DidMount")
    }

  render() {
    console.log("render")
    return (
      <div>
        <h1>Ini adalah Life Cycle didMount</h1>
      </div>
    )
  }
}
// hasilnya adalah yg di render duluan adalah di bagian constructor dulu, setelah itu di bagian render, lalu baru bagian lifeCycle.

import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

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
        setTimeout(console.log("component DidMount"))
        // kebalikan dari setTimeout adalah clearTimeout
    }

    componentDidUpdate(){
      console.log("component didUpdate")
    }

    componentWillUnmount(){
      // componen ini dieksekusi setelah komponen didMount. component ini biasa digunakan untuk clearing
      clearTimeout(console.log("component Will Unmount"))
    }

  render() {
    console.log("render")
    return (
      <div>
        {/* <LifeCycleChild /> */}
        {this.state.name}
        <button onClick={() => this.setState({name: "Suti OON"})}>Klik</button>
      </div>
    )
  }
}
// hasilnya adalah yg di render duluan adalah di bagian constructor dulu, setelah itu di bagian render, lalu baru bagian lifeCycle.

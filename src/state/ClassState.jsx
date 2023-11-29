import React, { Component } from 'react'

export default class ClassState extends Component {
  //state harus di deklarasikan di function body yang artinya disini
  constructor(){
    super()
    this.state = { //dibaca = this.state sama dengan objek
      name: "iman",
      email: "iman@gmail.com"
    }
  }
  render() {
    return (
      <div>
        <h1>State Class Component</h1>
        <h2>nama : {this.state.name} </h2>
        <h2>email : {this.state.email} </h2>
      </div>
    )
  }
}

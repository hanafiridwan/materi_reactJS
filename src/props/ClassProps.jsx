import React, { Component } from 'react'

//child, parent nya di App.js
// shortcut untuk membuat kerangka CLASS COMPONENT adalah rcc

export default class ClassProps extends Component {
  render() {
    console.log(this.props); //di class component, pemanggilan props dilakukan di bagian child dengan menambahkan "this" lalu tambahkan ".props"
    return (
      <div>
        <h1>INI CLASS COMPONENT</h1>
        <h2>Name: {this.props.name} </h2>
        <h2>email: {this.props.email} </h2>
      </div>
    )
  }
}

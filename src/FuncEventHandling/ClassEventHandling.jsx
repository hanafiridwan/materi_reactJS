import React, { Component } from 'react'

export default class ClassEventHandling extends Component {

    // Case 1. di Class tidak perlu arrow function dan tulisan const
    handleClick() {
        alert('Hello Budi')
    }

    //Case 2.
    handlesayHello(name){
        alert(`Hello ${name}`)
    }

  render() {
    return (
      <div>
        <h1>Class Event Handling</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={() => this.handlesayHello('Udin Bego')}>Say Hello</button>
        {/* Jangan lupa ini adalah Class jadi harus pake this. baru parameternyan */}
      </div>
    )
  }
}

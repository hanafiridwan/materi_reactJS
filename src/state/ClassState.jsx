import React, { Component } from 'react'

export default class ClassState extends Component {
  //state harus di deklarasikan di function body yang artinya disini
  constructor(){
    super()
    this.state = { //dibaca = this.state sama dengan objek
      name: "iman",
      email: "iman@gmail.com",
      job: "student"
    }
  }

  changeUser(){
    this.setState({
      name: "Wawan",
      email: "Wawan@gmail.com"
    })
  }

//    this.setState((prevState) => ({})) maksudnya "kita akan mengubah state dari state sebelumnya, jadi saya ingin hanya job yang berubah yang lainnya tetap sama"

  updateJob(){
    this.setState((prevState) => ({
      ...prevState,
      job : "Frontend Developer"
    }))
  }

  // cara salahnya. statenya berubah tetapi tidak terender ulang makanya di browser tidak terlihat perubahannya.
  // changeUser(){
  //   this.state = {
  //     name: "Wawan",
  //     email: "Wawan@gmail.com"
  //   }
  //   console.log(this.state);
  // }

  render() {
    return (
      <div>
        <h1>State Class Component</h1>
        <h2>nama : {this.state.name} </h2>
        <h2>email : {this.state.email} </h2>
        <h2>job : {this.state.job} </h2>
        <button onClick={() => this.changeUser()}>Change User</button>
        <button onClick={() => this.updateJob()}>Change Job</button>
      </div>
    )
  }
}

/* <button onClick={() => this.changeUser()}>Change User</button> 
  cara membacanya : saat button di klik akan menjalankan change user. "() =>" ini adalah function arrow
  changeUser() akan mengubah state sebelumnya dari iman menjadi wawan, dan iman@gmail.com menjadi wawan@gmail.com
*/

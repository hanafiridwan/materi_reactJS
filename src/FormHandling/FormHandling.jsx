import React, { Component } from 'react'

export default class FormHandling extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      email: ""
    };
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    // event.target.value artinya mengambil value di bagian target(ada di console browser)
    const {name, value} = event.target //di destructor agar lebih rapih
    this.setState((prev) => ({
      ...prev,
      [name]: value
      //agar tertuju ke value yang ingin di masukan. dan agar lebih dinamis ditambahkan kurung siku. Di tambahkan kurung siku dan diganti dengan (even.target.name) seperti itu agar field name dibagian return bisa masuk ke dalam name di constructor diatas, dan email akan masuk kedalam email
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // preventDefault berguna agar saat button nya disubmit tidak akan ke refresh
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} >
          <div>
          <label>Name </label>
          <input type="text" id="name" name='name' value={this.state.name} onChange={this.handleChange} />
          </div>
          <div>
          <label>Email </label>
          <input type="email" id="name" name='email' value={this.state.email} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

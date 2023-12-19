import React, { Component } from 'react';

class Classconditionalrendering extends Component {  //export default bisa ditaro di bawah atau disini
  constructor() {
    super()
    this.state = {
      isLogin: true  //kalau true akan muncul hasil yg pertama, kalau false akan muncul hasil kedua.
    }
  } 
  //cara conditional render 1
  // render() {
  //   return this.state.isLogin ? <h2>Selamat datang UDIN</h2> : <h2>Silahkan Login</h2>
  // }

  //cara conditional render 2
  // render(){
  //   return (
  //     <div>
  //       {this.state.isLogin ? <h2>Selamat datang UDIN</h2> : <h2>Silahkan Login</h2> }
  //     </div>
  //   )
  // }

  //cara conditional rendering 3
  // render(){
  //   return(
  //     <div>
  //       {/* cara ini karena kita merender dengan tag h2, jadi tinggal buat dengan tanda kurung kurawal seperti ini =>{} dan didalamnya tambahakan seperti di case ke2 seperti di bawah ini */}
  //       <h2>{this.state.isLogin ? "Selamat datang UDIN" : "Silahkan Login"}</h2>
  //     </div>
  //   )
  // }

  //cara conditional rendering 4
  render(){
    return(
      <div>
        {/* dibaca "Jika islOGIN bernilai true, maka tag h1 HOME akan ke render" */}
        {this.state.isLogin && <h1>HOME</h1>} 
      </div>
    )
  }
}

export default Classconditionalrendering;

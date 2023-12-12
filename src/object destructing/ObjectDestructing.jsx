//Contoh 1

// import React from 'react';

// const ObjectDestructing = ({name, email}) => {
//   return (
//     <div>
//       <h1>Functional Props</h1>
//       <h2>Nama : {name} </h2>
//       <h2>Email : {email} </h2>
//     </div>
//   );
// };

// export default ObjectDestructing;

//INI CONTOH KE 2

// import React from 'react';

// const ObjectDestructing = () => {
//     const {name, email} = props
//   return (
//     <div>
//       <h1>Functional Props</h1>
//       <h2>Nama : {name} </h2>
//       <h2>Email : {email} </h2>
//     </div>
//   );
// };

// export default ObjectDestructing;

import React, { Component } from 'react'

export default class ObjectDestructing extends Component {
  render() {
    const {name, email, job} = this.props;
    console.log(this.props); //di class component, pemanggilan props dilakukan di bagian child dengan menambahkan "this" lalu tambahkan ".props"
    return (
      <div>
        <h1>INI CLASS COMPONENT bagian Object Destructing</h1>
        <h2>Name: {name} </h2>
        <h2>email: {email} </h2>
        <h2>job: {job} </h2>
      </div>
    )
  }
}


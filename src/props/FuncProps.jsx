import React from 'react';

const FuncProps = (props) => {
  return (
    <div>
      <h1>Functional Props</h1>
      <h2>Nama : {props.name} </h2>
      <h2>Email : {props.email} </h2>
    </div>
  );
};

export default FuncProps;
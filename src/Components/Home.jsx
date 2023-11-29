
import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count+1);
  }

  return (
    <div style={{margin: '50px'}}>
      <h1>Ini Functional Component</h1>
      <h3>{count}</h3>
      <button onClick={increase}>Tambah Data</button>
    </div>
  )
}

// CLASS COMPONENT
// import React, {Component} from "react";
// class Home extends Component{
//    constructor(){
//     super()
//     this.state = {
//         count : 0
//     };
//     this.increase = this.increase.bind(this); //bind ini saat tombol ditekan ngambil dari this
//    }

//    increase(){  //increase ini hanya penamaan, boleh selain increase
//         this.setState({count : this.state.count +  1});
//    }

//    render() {
//     return (
//       <div style={{margin: '50px'}}>
//       <h1>Ini class component</h1>
//       <h3>{this.state.count}</h3> 
//       {/* ngambil dari atas */}
//       <button onClick={this.increase}>Tambah</button>
//     </div>
//     )

//    }
// }

export default Home
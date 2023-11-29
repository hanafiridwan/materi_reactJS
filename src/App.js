// import logo from './logo.svg';
import './App.css';
import ClassState from './state/ClassState';
// import ClassProps from './props/ClassProps';

//parent

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Ridwan Hanafi
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Lihat Selengkapnya
//     //     </a>
//     //   </header>
//     // </div>
//     // <div className="App">
//     //   <ClassProps name="Sabeni" email="sabeni@gmail.com" />
//     // </div>
//   );
// }

function App(){
  return(
    <div className="App">
      <ClassState />
    </div>

  );
}

export default App;

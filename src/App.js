// import logo from './logo.svg';
import './App.css';
import Classconditionalrendering from './Conditionalrendering/Classconditionalrendering';
import ClassEventHandling from './FuncEventHandling/ClassEventHandling';
import FuncEventHandling from './FuncEventHandling/FuncEventHandling';
import ObjectDestructing from './object destructing/ObjectDestructing';
import ClassProps from './props/ClassProps';
import FuncProps from './props/FuncProps';
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

// function App(){
//   return(
//     <div className="App">
//       {/* <ClassState /> */}
//     {/* <FuncProps name="Udin" email="Udin@gmail.com" /> */}
//     <ObjectDestructing name="Wahyu" email="Wahyu@gmail.com" job="Student" />
//     {/* <ClassProps name="Bagus" email="Bagus@gmail.com" /> */}
//     </div>

//   );
// }

function App(){
  return(
    <div className="App">
      <h1>This is Learn Event Handling</h1>
      {/* <FuncEventHandling /> */}
      {/* <ClassEventHandling /> */}
      <Classconditionalrendering />
    </div>

  );
}

export default App;


import React, { useState } from 'react';
import './App.css';
import MyComponentClass from './components/myComponent/MyComponentClass';
import MyComponent from './components/myComponent/MyComponent';

// export default class App extends React.Component {
//  render(){
//   return (
//     <div className="App" style={{color: "green"}}>
      
//       {/* <h1>From React app page</h1> */}
//       {/* <MyComponentClass/> */}
//       <MyComponent/>
//     </div>
//   );
//  }
// }

export default function App() {

  const [show, setShow] = useState(true)
  return (
    <div className="App" style={{color: "green"}}>
      
      {/* <h1>From React app page</h1> */}
      {/* <MyComponentClass/> */}

      
     <div>{show &&  <MyComponent/>}   </div>
     <p>
      <button type='text' onClick={()=>{setShow((prevShow)=>!prevShow)}}>

          {show ? 'Hide post': 'Show post'}
      </button>
     </p>
    </div>
  );
}


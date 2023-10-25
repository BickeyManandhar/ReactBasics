import './App.css';
import { useState } from 'react';

//Props are just arguments that you pass in react components to later pass dynamic data when you call the component
// const Person = (props)=>{
//   return (
//     <>
//       <h1>First Name: {props.firstname}</h1>
//       <h2>Last Name: {props.lastname}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }



const App= () =>{
  // const name = "Bickey"; // below we are returning JSX and we can write any JS code inside {} 
  // const isNameShowing = true;
  const [counter , setCounter] = useState(0); //here we are de-structuring array and assigning useState(0). What this does is it sets the initial value of counter to 0 and we will use setCounter function to set the value of counter . React hooks must be called inside react function component
  return (
    <div className="App">
      {/* <h1>Hello, {isNameShowing ? name : 'Your name is not showing'}!!!</h1>
      {name ? (
      <>
      <h1>{name}</h1>
      </>
      ) : (
      <>
      <h1>This is one element</h1>
      <h2>This is another element</h2>
      </>)} */
      // you can pass the data inside {} or without {} if you do not need to evaluate the data
      // <>
      // <Person firstname={'Aakash'} lastname={'KC'} age={20}/>
      // <Person firstname='Bickey' lastname={'Manandhar'} age={25}/>
      // <Person firstname={'Aashish'} lastname={'Karanjit'} age={22}/>
      // </>
      <>
        <button onClick={()=>setCounter((prevCount)=>prevCount+1)}>+</button>
        <h2>{counter}</h2>
        <button onClick={()=>setCounter((prevCount)=>prevCount-1)}>-</button>
      </>
      }
    </div>
  );
}

export default App;

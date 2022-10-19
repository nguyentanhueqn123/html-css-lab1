import './App.css';
import * as React from "react";
import MyInput from './MyInput';
import './App.css';

// export default function App(){
//   const [name] = React.useState("Adam");
//   const [age] = React.useState(35);
//   return(
//     <>
//       <p>My name is {name}</p>
//       <p>My age is {age}</p>
//     </>
//   )


// }
function App() {
  const[name,setName]=React.useState("Adam");
  const[age,setAge]=React.useState(35);
  return (
    <>
    {/* <section>
      <input
      value={name}
      onChange={(e) =>  setName(e.target.value)}
      />
      <p>My name is {name}</p>
    </section>
    <section>
      <input
      type="number"
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      />
      <p>My age is {age}</p>
    </section> */}
    <MyInput></MyInput>

    </>
  );
}

export default App;

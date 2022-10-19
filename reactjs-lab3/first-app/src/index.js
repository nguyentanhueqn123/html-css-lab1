import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyComponent from './MyComponent';
import MyButton from './MyButton';
import MyList from './MyList';

const appState = {
  text: "My Button",
  disabled: true,
  items: ["First", "Second", "Third"],
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// function render(props){
//   root.render(
//     <main>
//       <MyButton text={props.text} disabled={props.disabled}></MyButton>
//       <MyList items={props.items}></MyList>
//     </main>
//   );
// }
// render(appState);
// setTimeout(() =>{
//   appState.disabled = false;
//   appState.items.push("Fourth");
//   render(appState);
// },1000);

//1.3
const root = ReactDOM.createRoot(document.getElementById('root'));
function render ({second}){
  root.render(
    <main>
      <MyButton></MyButton>
      <MyButton text={second.text} disabled={second.disabled}></MyButton>
    </main>
  )
}
render({
  second: {
    text: "Second Button",
    disabled: true,
  }
})

const array = ["First", "Second", "Third"];
const object = {
  first: 1,
  second: 2,
  third: 3
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     <p>Hello, <strong>JSX</strong></p>
//     <div>
//       <button></button>
//       <code></code>
//       <input type="text" />
//       <label htmlFor=""></label>
//       <p></p>
//       <pre></pre>
//       <select name="" id=""></select>
//       <table></table>
//       <ul></ul>
//     </div>
//     <section>
//       <header>
//         <h1>A Header</h1>
//       </header>
//       <nav>
//         <a href="item">Nav Item</a>
//       </nav>
//       <main>
//         <p>The main content...</p>
//       </main>
//       <footer>
//         <small>&copy; 2021</small>
//       </footer>
//     </section>

//     <hr />
//     <section>
//       <h1>Array</h1>
//       <ul>
//         {array.map((i) =>(
//           <li key={i}>{i}</li>
//         ))}
//       </ul>
//       <h1>Object</h1>
//       <ul>
//         {Object.keys(object).map((i) =>(
//             <li key={i}>
//               <strong>{i}: </strong>
//               {object[i]}
//             </li>
//         ))}
//       </ul>
//     </section>
//     <hr />
//     <MyComponent />


//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

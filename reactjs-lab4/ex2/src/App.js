import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import DatingCards from './components/DatingCards'
import SwipeButtons from './components/SwipeButtons'



function App() {
  return (
    <div className="App">
      <Header></Header>
      <DatingCards></DatingCards>
      <SwipeButtons></SwipeButtons>
    </div>
  );
}

export default App;

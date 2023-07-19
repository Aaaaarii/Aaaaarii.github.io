import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import HomePageCardPresentation from '../components/HomePageCardPresentation';
import HomePageCardService from '../components/HomePageCardService';
import HomePageCardService2 from '../components/HomePageCardService2';
import HomePageCardService3 from '../components/HomePageCardService3';


function App() {
  return (
    <div className="App">
      <HomePageCardPresentation />
      <div className="Service">
        <h1>Empowering Your Web Vision: Services I Offer</h1>
        <div className='HomeCardServiceContainer'>
        <HomePageCardService />
        <div>
        <HomePageCardService2 />
        <HomePageCardService3 />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

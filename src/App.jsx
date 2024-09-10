import { useState } from 'react';
import './App.css';
import HeroPortrait from './components/HeroPortrait';
import logo from './assets/logo.png';
const heroes = ['Abrams', 'Bebop', 'Dynamo', 'Grey Talon', 'Haze', 'Infernus', 'Ivy', 'Kelvin', 'Lady Geist', 'Lash', 'McGinnis', 'Mo & Krill', 'Paradox', 'Pocket', 'Seven', 'Shiv', 'Vindicta', 'Viscous', 'Warden', 'Wraith', 'Yamato'];

function App() {
  const [selectedHeroes, setSelectedHeroes] = useState([]);

  const generateHeroes = () => {
    let iterations = 0;
    const maxIterations = Math.floor(Math.random() * (25 - 8 + 1)) + 8; // Number of times to shuffle before final selection

    const interval = setInterval(() => {
      const shuffled = [...heroes].sort(() => 0.5 - Math.random());
      setSelectedHeroes(shuffled.slice(0, 3));

      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(interval);
      }
    }, 50); // Update every 50ms
  };

  return (
    <div className="App">
      <header className='App-header'>
        <a href='https://store.steampowered.com/app/1422450/Deadlock/' target='_blank'>
          <img className='logo' src={logo} alt="logo"/>
        </a>
        <h3 className='title'>Heroulette</h3>
        <div className='logo'></div>
      </header>

      <div className="App-content">
        <button className='generate-btn' onClick={generateHeroes}>Generate</button>

        <div className='hero-container' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {selectedHeroes.map((hero, index) => (
            <HeroPortrait
              key={hero}
              hero={hero}
              priority={index === 0 ? 'high' : index === 1 ? 'medium' : 'low'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

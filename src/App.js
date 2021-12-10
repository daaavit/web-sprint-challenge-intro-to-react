
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';


const App = () => {
  const [starPpl, setStarPpl] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://swapi.dev/api/people')
        .then(resp => {
          setStarPpl(resp.data);
        })
        .catch(err => {
          console.log('somthing went wrong');
        });
    }
    fetchData();
  }, [console.log("starPPL", starPpl)]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starPpl.map((bar, windex) => {
        return (
          <Character 
      
          key={windex} 
          star={bar}
          />
        );
      })}
    </div>
  );
}

export default App;




import React from 'react';
import './App.css';
import CurrentWeather from './components/ClassFetch';


const App: React.FunctionComponent=()=> {
  return (
    <div className="App">
      <CurrentWeather />
    </div>
  );
}

export default App;

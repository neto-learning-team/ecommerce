const React = require('react');
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Wallpaper from './components/wallpaper';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Nav />
      <Wallpaper />
      Hello world
    </div>
  );
}

module.exports = App;

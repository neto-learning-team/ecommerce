const React = require('react');
import Header from './components/header';
import Nav from './components/nav';
import Wallpaper from './components/wallpaper';

function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="/stylesheets/App.css" />
        <link rel="stylesheet" href="/stylesheets/Header.css" />
        <link rel="stylesheet" href="/stylesheets/Nav.css" />
        <link rel="stylesheet" href="/stylesheets/Wallpaper.css" />
      </head>
      <Header />
      <body>
        <Nav />
        <Wallpaper />
        Hello world
      </body>
    </div>
  );
}

module.exports = App;

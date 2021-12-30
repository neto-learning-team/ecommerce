const React = require('react');
import Header from './components/header';
import Nav from './components/nav';
import Wallpaper from './components/wallpaper';
import BestSellers from './components/bestSellers';

function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <Header />
      <body>
        <Nav />
        <Wallpaper />
        <BestSellers />
      </body>
    </div>
  );
}

module.exports = App;

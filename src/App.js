import React from 'react';
import './App.css';
import Header from '.Header';
import Main from '.Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
    <div className="App">
     <h1>Proof of Life!</h1>
     <Header />
     <Main />
     <Footer />
    </div>
    );
  }
}

export default App;

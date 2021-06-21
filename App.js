import React from 'react';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import Card from './card.js';

//var address = 'https://api.currencyscoop.com/v1/currencies?api_key=a069d8f602f2ba4be081d0b4700910e7&type=fiat'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []      
    };
  }

  componentDidMount() {
    const apiUrl = 'https://api.currencyscoop.com/v1/currencies?api_key=a069d8f602f2ba4be081d0b4700910e7&type=fiat';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        var lol = data
        var nextData = []

        function printValues(obj) {
          for(var k in obj) {
              if(obj[k] instanceof Object) {
                  printValues(obj[k]);
              } else {                  
                  nextData.push(obj[k]);
              };
          }
      };

      //printValues(lol)
      //nextData.splice(0, 2)
      //JSON.parse(nextData)
      //console.log(nextData)
      
        this.setState({data: lol})
      });
  }
  render() {

    console.log(this.state.data.currency_name)
    return (
      <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Card />
      <footer>
        <Footer />
      </footer>
    </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Api />
      <Card />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}


class App extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api.currencyscoop.com/v1/currencies?api_key=a069d8f602f2ba4be081d0b4700910e7&type=fiat';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
*/
export default App;
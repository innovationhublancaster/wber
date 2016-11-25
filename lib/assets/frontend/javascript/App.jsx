import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          salute: 'Hello (Virtual DOM) World !!!',
          countries: [{name:'Argentina:', capital:'Buenos Aires'},
                      {name:'Peru',       capital:'Lima'},
                      {name:'Uruguay',    capital:'Montevideo'}]
         }
    this.handleClick = this.handleClick.bind(this); // linking the method scope
   }

  handleClick(){
    this.setState({salute: 'Hey!!, a new salute!'});
  }
render() {
      return (
         <div>
           <h2>{this.state.salute}</h2>
           { this.state.countries.map((object, i) => {
              return <div key={i}> Country: <b>{object.name}</b> and capital: <b>{object.capital}</b> </div>
           })}
           <p id="onclick"><button onClick={this.handleClick}>Change title</button></p>
         </div>
      )
   }
}
export default App;

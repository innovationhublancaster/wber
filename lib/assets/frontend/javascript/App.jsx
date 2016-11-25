import React from 'react';
import HelloMessage from './HelloMessage';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Map from './Map';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          salute: 'Hello (Virtual DOM) World !!!',
          users: []
         }
    this.handleClick = this.handleClick.bind(this); // linking the method scope
   }

   componentWillMount() {
     fetch('//wber.dev/users.json').then((response) => {
       return response.json();

     }).then((response) => {
       console.log(response);
       this.setState({
         users: response
       })
     });
   }

  handleClick(){
    this.setState({salute: 'Hey!!, a new salute!'});
  }
render() {
      return (
        <div className="main">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">wber</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
          <Map />
        </div>





        //  <div className="jumbotron">
        //    <h2>{this.state.salute}</h2>
        //    { this.state.users.map((object, i) => {
        //       return <div key={i}> Country: <b>{object.name}</b> and capital: <b>{object.picture}</b> </div>
        //    })}
        //    <p id="onclick"><button onClick={this.handleClick}>Change title</button></p>
        //    <HelloMessage/>
        //  </div>
      )
   }
}
export default App;

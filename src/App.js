import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SreachBox} from './components/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = { 
      monsters: [],
      srearchField:''
     };
     //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({srearchField: e.target.value})
  }

  render(){
    const {monsters, srearchField} = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(srearchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monsters Inc.</h1>
      <SreachBox 
        placeholder='search monsters'
        handleChange = {this.handleChange}
      />

        <CardList monsters={filteredMonsters}/>
      </div>  
    );
  }
}
export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor(){
    super();
    this.state=({ 
      user: []
    })
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/denvinnpaolo')
    .then(
      user=>{this.setState({user:user.data})
      console.log(user.data)
    })
    .catch(err=>console.log(err))
  }

  render(){
    return (
      <div className="App">
        <UserCard user={this.state.user}/>
      </div>
    );
  };
}

export default App;

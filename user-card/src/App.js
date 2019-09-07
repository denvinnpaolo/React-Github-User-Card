import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Container, Divider } from 'semantic-ui-react'
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor(){
    super();
    this.state=({ 
      user: [],
      userFollowers:[],
      userSearch:"",
      count:0
    })
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/denvinnpaolo')
    .then( user => {
      this.setState({ user:[user.data] })
      console.log(user.data)
    })
    .catch(err=>console.log(err));
  }

  componentDidUpdate(prevProps, prevState){

      if( prevState !== this.state.user ){
        let count = 0;
        if(this.state.count!==1){
        axios
        .get('https://api.github.com/users/justsml/following')
        .then(user=>{
          this.setState({ userFollowers:user.data, count:1 })
          console.log(user)
        })
        .catch(err=>console.log(err))
        }
      }
    }

    handleChange = e => {
      this.setState({userSearch: e.target.value});
    }

    changeUser = e => {
      e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.userSearch}`)
      .then( user => {
        this.setState({ user:[user.data] })
        console.log(user.data)
      })
      .catch(err=>console.log(err))
    }

  render(){
    return (
      <div className="App">
        <Container textAlign='center'>Info</Container>
        <p>{this.state.user.map(user=>(
          <UserCard user={user} key={user.id} />
        ))}</p>
        <input
          type="text"
          value={this.state.userSearch}
          onChange={this.handleChange}
          placeholder="github username"
        />
        <button onClick={this.changeUser}>Search User</button>
        <Divider />
        <Container  className="cardcontainer">
        <p>        
        {this.state.userFollowers.map(user=>(
          <UserCard user={user} key={user.id} />
        ))}
        </p>
        </Container>
      </div>
    );
  };
}

export default App;

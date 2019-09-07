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
    .then( user => {
      this.setState({ user:[user.data] })
      console.log(user.data)
    })
    .catch(err=>console.log(err))
   return(<UserCard user={this.state.user} />)
  }

  componentDidUpdate(prevProps, prevState){
      if( prevState !== this.state.user ){
        let count = 0;
        if(count!==1){
        axios
        .get('https://api.github.com/users/justsml/following')
        .then(user=>{
          this.setState({ user:user.data })
        })
        .catch(err=>console.log(err))
        return count=count+1;

        console.log(count)
        }
      }
    }
  render(){
    return (
      <div className="App">
        {this.state.user.map(user=>(
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    );
  };
}

export default App;

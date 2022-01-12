import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {

  state = {
    currentUser:'brandib222',
    user: {},
    followers:[]
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data});
      });
  }

  componentDidUpdate (prevProps, prevState) {
    if(this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
        .then(resp => {
          this.setState({
            ...this.state,
            followers:resp.data
          })
        })
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      currentUser:e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data});
      });
  }

  render() {
    return(<div>
      <h1> Github Info</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} placeholder='github handle'/>
        <button>Search</button>
      </form>

      <User user={this.state.user} />
      <FollowerList followers={this.state.followers} /> 
      
    </div>);
  }
}

export default App;

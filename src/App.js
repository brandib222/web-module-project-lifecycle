import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {

  state = {
    currentUser:'brandib222',
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/91443920?v=4",
      html_url: "https://github.com/brandib222",
      name: "Brandi Ball",
      login: "brandib222",
      totalRepos: 41,
      followers: 6
    },
    followers:[
      {
      login: "Marcel-rodriguez",
      avatar_url: "https://avatars.githubusercontent.com/u/55255486?v=4",
      html_url: "https://github.com/Marcel-rodriguez",
      },
      {
        login: "Marcel-rodriguez",
        avatar_url: "https://avatars.githubusercontent.com/u/55255486?v=4",
        html_url: "https://github.com/Marcel-rodriguez",
      },
      {
        login: "Marcel-rodriguez",
        avatar_url: "https://avatars.githubusercontent.com/u/55255486?v=4",
        html_url: "https://github.com/Marcel-rodriguez",
      },
    ]
  }

  render() {
    return(<div>
      <h1> Github Info</h1>
      <form>
        <input placeholder='github handle'/>
        <button>Search</button>
      </form>

      <User user={this.state.user} />
      <FollowerList followers={this.state.followers} /> 
      
    </div>);
  }
}

export default App;

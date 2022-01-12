import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  render() {
    return(<div>
      <h1> Github Info</h1>
      <form>
        <input placeholder='github handle'/>
        <button>Search</button>
      </form>

      <User />
      <FollowerList /> 
      
      <div className='followers'>
        <div className='follower'>
          <img width='200px' src='https://avatars.githubusercontent.com/u/55255486?v=4' />
          <a target='_blank' href='https://github.com/Marcel-rodriguez'><p>Marcel-rodriguez</p></a>
        </div>
      </div>


    </div>);
  }
}

export default App;

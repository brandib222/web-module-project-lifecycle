import React from 'react';

class App extends React.Component {
  render() {
    return(<div>
      <h1> Github Info</h1>
      <form>
        <input placeholder='github handle'/>
        <button>Search</button>
      </form>

      <div className='user-info'>
        <img src='https://avatars.githubusercontent.com/u/91443920?v=4' />
        <a target='_blank' href='https://github.com/brandib222'> <h3>Brandi Ball</h3> </a>
        <p>(brandib222)</p>
        <p>Total Repos: 41</p>
        <p>Total Followers: 6</p>
      </div>
      <div className='followers'>
        <div className='follower'>
          <img src='https://avatars.githubusercontent.com/u/55255486?v=4' />
          <p>Marcel-rodriguez</p>
        </div>
      </div>


    </div>);
  }
}

export default App;

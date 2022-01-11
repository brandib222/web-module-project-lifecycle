import React from 'react';

class App extends React.Component {
  render() {
    return(<div>
      <h1> Github Info</h1>
      <form>
        <input placeholder='github handle'/>
        <button>Search</button>
      </form>
    </div>);
  }
}

export default App;

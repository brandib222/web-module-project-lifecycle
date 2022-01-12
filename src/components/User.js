
import React from 'react';

class User extends React.Component {
    render () {
        return (<div className='user-info'>
        <img src='https://avatars.githubusercontent.com/u/91443920?v=4' />
            <a target='_blank' href='https://github.com/brandib222'> <h3>Brandi Ball</h3> </a>
            <p>(brandib222)</p>
            <p>Total Repos: 41</p>
            <p>Total Followers: 6</p>
        </div>);
    }
}

export default User;
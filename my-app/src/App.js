import React from 'react';
import axios from 'axios';
import './App.css';
import User from './components/user'
import Follower from './components/follower'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/rohithsachdeva')
      .then(response1 => {
        console.log(response1.data)
        axios
          .get(response1.data.followers_url)
          .then(response2 => {
            console.log(response2.data)
            this.setState({
              user: response1.data,
              followers: response2.data
            })
          })
      })
  }

  render() {
    return (
      <div>
        <h1>Github User</h1>
        <User
          userImg={this.state.user.avatar_url}
          username={this.state.user.login}
          name={this.state.user.name}
          profile={this.state.user.html_url}
          followers= {this.state.user.followers}
          following={this.state.user.following}
          bio={this.state.user.bio}
        />
        <br></br>

        <h2>Followers</h2>
        {
          this.state.followers.map(e => {
            return <Follower
              username={e.login}
              userImg={e.avatar_url}
              profile={e.html_url}
              followers={e.followers}
              following={e.following}
              bio={e.bio}
            />
          })
        }

      </div>
    )
  }
}
export default App;
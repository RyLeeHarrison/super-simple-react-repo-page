import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 1,
    gists: null
  }

  componentDidMount() {
    fetch("https://api.github.com/users/ryleeharrison/repos")
      .then(res => res.json())
      .then(gists => this.setState({gists}))
  }

  render() {
    return (
      <div className="App-main">
        <h2 className="App-title">REPOS</h2>
         {(this.state.gists ? (
            <ul>
              {this.state.gists.map(({ id, html_url, name, description }) => (
                <li key={id}>
                  <a href={html_url}><h2>{name}</h2></a>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div>Loading...</div>
          ))}
      </div>
    )
  }
}

export default App
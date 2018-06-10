import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    listItems: null
  }

  componentDidMount() {
    axios
      .get('https://089f891a-4bbd-4309-8cc7-78bcde061f96.mock.pstmn.io/get-list-item')
      .then((listItems) => {
        this.setState({
          listItems: listItems.data
        }) 
      })
  }
  render() {
    const { listItems } = this.state
    return (
      <div>
        <h1>List of item:</h1>
        <ul>
          { !listItems ? 'Loding' : listItems.map((listItem) => <li key={listItem}>{listItem}</li>) }
        </ul>
      </div>
    );
  }
}

export default Home
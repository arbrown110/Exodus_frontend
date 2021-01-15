import React, { component } from 'react';
import Adventures from '../components/adventures/Adventures'

class Adventures extends Component {
    render() {
        const { adventures } = this.props
    const adventures = adventures.map(adventure => {
      return (
        <Adventure key={adventure.id} adventure={adventure} />
      )
  })
    return (
      <ul>
        <h2 class="adventures">What is the topic for today?</h2>
        {adventures}
      </ul>
    )
  }
}

export default Adventures;
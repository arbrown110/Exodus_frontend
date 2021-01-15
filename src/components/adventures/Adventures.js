import React, { component } from 'react';
import Adventure from '../components/adventures/Adventure'

class Adventures extends Component {
    render() {
        const { adventures } = this.props
    const adv = adventures.map(adventure => {
      return (
        <Adventure key={adventure.id} adventure={adventure} />
      )
  })
    return (
      <ul>
        <h2 class="adventures">What is the topic for today?</h2>
        {adv}
      </ul>
    )
  }
}

export default Adventures;
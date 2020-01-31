import React, {Component} from 'react'
import {Card, Button} from 'antd'

export default class PuzzleCardPage extends Component {
  constructor(props) {
    super(props)
    this.counter = 100
    this.state = {
      cards: [
        {
          id: 1,
          setup: 'Did you hear about the two silk worms in a race?',
          punchline: 'It ended in a tie',
        },
        {
          id: 2,
          setup: 'What happens to a frog\'s car when it breaks down?',
          punchline: 'It gets toad away',
        },
      ]
    }
  }

  addNewCard = () => {
    this.setState(prev => {
      const cardList = prev.cards
      this.counter += 1
      const card = {
        id: this.counter,
        setup: '',
        punchline: ''
      }
      return {
        cards: cardList.concat(card)
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.cards.map(card => <Card key={card.id}>
          <div>Q: {card.setup}</div>
          <div>
            <strong>A: {card.punchline}</strong>
          </div>
        </Card>)}
      </div>
    )
  }
}
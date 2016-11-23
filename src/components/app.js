import React from 'react'

import UserBlackjack from './user_blackjack'
import AIBlackjack from './ai_blackjack'
import { setAICards, setUserCards, hitAI, hitUser } from '../actions/blackjack_actions'


export default class App extends React.Component {
  constructor(){
    super()

    this.hitMe = this.hitMe.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)
    this.stay = this.stay.bind(this)
  }

  hitMe(event){
    event.preventDefault()
    if (event.target.id === "userHit") {
      this.props.store.dispatch(hitUser(this.props.store.getState()))
    } else if (event.target.id === "AIHit") {
      this.props.store.dispatch(hitAI(this.props.store.getState()))
    }
  }

  calculateAiScore(){
    let total = 0
    this.props.store.getState().aiCards.forEach(card => {
      total += card.value}
    )
    return total > 21 ? `${total} - BUST` : total
  }

  calculateUserScore(){
    let total = 0
    this.props.store.getState().userCards.forEach(card => {
      total += card.value}
    )
    if (total > 21) {
      // window.document.getElementById('userHit').children[0].disabled = "true"
      // window.document.getElementById('userStay').children[0].disabled = "true"
      window.alert('You lose.')
      return `${total} - BUST`
    } else {
      return total
    }
  }

  stay(event){
    event.preventDefault()
    if (this.calculateUserScore() > this.calculateAiScore()) {
      window.alert('Player 1 wins!')
    } else if (this.calculateUserScore() < this.calculateAiScore()) {
      window.alert('Computer player wins!')
    } else {
      window.alert('you both suck')
    }
    // window.document.getElementById('userHit').children[0].disabled = "true"
    // window.document.getElementById('userStay').children[0].disabled = "true"

  }

  render(){
    return(
      <div>
        <UserBlackjack userCards={this.props.store.getState().userCards} score={this.calculateUserScore} hitMe={this.hitMe} stay={this.stay}/>
        <AIBlackjack aiCards={this.props.store.getState().aiCards} score={this.calculateAiScore} hitMe={this.hitMe}/>
      </div>
    )
  }
}

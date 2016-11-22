import React from 'react'

import UserBlackjack from './user_blackjack'
import AIBlackjack from './ai_blackjack'
import { setAICards, setUserCards, hitAI, hitUser } from '../actions/blackjack_actions'


export default class App extends React.Component {
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
    return total
  }

  calculateUserScore(){
    let total = 0
    this.props.store.getState().userCards.forEach(card => {
      total += card.value}
    )
    return total
  }

  stay(event){
    event.preventDefault()
    if (event.target.id === "userStay") {
      return 'foo'
    } else if (event.target.id === "AIStay") {
      return 'bar'
    }
  }

  render(){
    return(
      <div>
        <UserBlackjack userCards={this.props.store.getState().userCards} score={this.calculateUserScore.bind(this)} hitMe={this.hitMe.bind(this)} stay={this.stay.bind(this)}/>
        <AIBlackjack aiCards={this.props.store.getState().aiCards} score={this.calculateAiScore.bind(this)} hitMe={this.hitMe.bind(this)} stay={this.stay.bind(this)}/>
      </div>
    )
  }
}

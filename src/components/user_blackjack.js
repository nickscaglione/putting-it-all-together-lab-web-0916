import React from 'react'

export default function(props) {

  let cards = props.userCards.map(card =>
    <li>{ card.name }</li>
  )

  return(
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {cards}
      </ul>
      <form id="userHit" onSubmit={props.hitMe}>
        <button type="submit">Hit Me</button>
      </form>
      <form id="userStay" onSubmit={props.stay}>
        <button type="submit">Stay</button>
      </form>
    </div>
  )

}

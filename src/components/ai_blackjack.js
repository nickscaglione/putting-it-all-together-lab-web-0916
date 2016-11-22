import React from 'react'

export default function(props) {

  let cards = props.aiCards.map(card =>
    <li>{ card.name }</li>
  )

  return(
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {cards}
      </ul>
      <form id="AIHit" onSubmit={props.hitMe}>
        <button type="submit">Hit Me</button>
      </form>
      <form id="AIStay" onSubmit={props.stay}>
        <button type="submit">Stay</button>
      </form>
    </div>
  )

}

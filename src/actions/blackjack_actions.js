export function fetchDeck(){
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(state){
  let firstCard = state.deck[Math.floor(Math.random() * (state.deck.length - 1))]
  let newDeck = state.deck.filter(card => card !== firstCard)
  let secondCard = newDeck[Math.floor(Math.random() * (newDeck.length - 1))]
  newDeck = newDeck.filter(card => card !== secondCard)

  return {
    type: 'SET_AI_CARDS',
    payload: {
      aiCards: [firstCard, secondCard],
      deck: newDeck
    }
  }
}

export function setUserCards(state){
  let firstCard = state.deck[Math.floor(Math.random() * (state.deck.length - 1))]
  let newDeck = state.deck.filter(card => card !== firstCard)
  let secondCard = newDeck[Math.floor(Math.random() * (newDeck.length - 1))]
  newDeck = newDeck.filter(card => card !== secondCard)

  return {
    type: 'SET_USER_CARDS',
    payload: {
      userCards: [firstCard, secondCard],
      deck: newDeck
    }
  }
}

export function hitAI(state){
  let newCard = state.deck[Math.floor(Math.random() * state.deck.length) - 1]
  let newDeck = state.deck.filter(card => card !== newCard)

  return {
    type: 'HIT_AI',
    payload: {
      aiCard: newCard,
      deck: newDeck
    }
  }
}

export function hitUser(state){
  let newCard = state.deck[Math.floor(Math.random() * state.deck.length) - 1]
  let newDeck = state.deck.filter(card => card !== newCard)

  return {
    type: 'HIT_USER',
    payload: {
      userCard: newCard,
      deck: newDeck
    }
  }
}

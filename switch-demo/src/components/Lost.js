function Lost(props) {

  return (
    <div className="Lost">
      <h1>You lost the game</h1>
      <button onClick={ () => props.handleClick('start')}>New Game</button>
    </div>
  )
}

export default Lost

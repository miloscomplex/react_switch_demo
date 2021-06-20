function Won(props) {

  return (
    <div className="Won">
      <h2>You won the game</h2>
      <button onClick={ () => props.handleClick('start')}>New Game</button>
    </div>
  )
}

export default Won

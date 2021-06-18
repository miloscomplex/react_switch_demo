function Won(props) {

  return (
    <div className="Won">
      <h1>You won the game</h1>
      <button onClick={ () => props.handleClick('start')}>New Game</button>
    </div>
  )
}

export default Won

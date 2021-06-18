function Playing(props) {

  return (
    <div className="Playing">
      <h1>Playing the game page</h1>
      <button onClick={ () => props.handleClick('lost')}>Lost the Game</button>
      <button onClick={ () => props.handleClick('won')}>Won the Game</button>
      <button onClick={ () => props.handleClick('start')}>New Game</button>
    </div>
  )
}

export default Playing

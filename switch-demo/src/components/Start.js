function Start(props) {

  return (
    <div className="Start">
      <h1>This is the start page</h1>
      <button onClick={ () => props.handleClick('playing')}>Start Game</button>
    </div>
  )
}

export default Start

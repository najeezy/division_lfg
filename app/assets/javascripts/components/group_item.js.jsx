import LevelCircle from './level_circle.js.jsx';

const GroupItem = ({
  id, mission_name, is_active, creator, players, isLoggedIn, onJoin
}) => {
  // creates string of classes for microphone class
  const micClass = (hasMic) => {
    return `fa fa-microphone ${hasMic ? 'active' : 'inactive'}`
  }

  return (
    <div className="groupItem col-md-12">
      <div className="col-md-8">

        <h2>{mission_name}</h2>
        <p>created by: {creator.username}</p>

        <div className="join-button-container col-md-4 text-left">
          {
            isLoggedIn ?
            <button className="btn btn-basic" onClick={() => onJoin(id)}>
              Join
            </button> :
            null
          }
        </div>

        <div className="mics-container col-md-8 text-right">

          {/* player mics */}
          {players.map((player) => (
            <i key={player.id} className={micClass(player.has_mic)}></i>
          ))}

          {/* creator mic */}
          <i key={creator.id} className={micClass(creator.has_mic)}></i>
          </div>
        </div>

        <div className="level-list col-md-4">

          {/* player level circles */}
          {players.map((player) => (
            <LevelCircle key={player.id} level={player.level} />
          ))}

          {/* creator level circle */}
          <LevelCircle key={creator.id} level={creator.level} />
        </div>
      </div>
  )
}

export default GroupItem

import LevelCircle from './level_circle.js.jsx';

const GroupItem = ({ id, mission_name, is_active, creator, players }) => (
  <div className="groupItem col-md-12">
    <div className="col-md-8">
      <h2>{mission_name}</h2>
      <p>created by: {creator.username}</p>
      <div className="join-button-container col-md-4 text-left">
        <button className="btn btn-basic">Join</button>
      </div>
      <div className="mics-container col-md-8 text-right">
        <i
          key={creator.id}
          className={
            'fa fa-microphone ' + (creator.has_mic ? 'active' : 'inactive')
          }
        >
        </i>
        {players.map((player) => {
          const className = 'fa fa-microphone ' + (player.has_mic ?
            'active' :
            'inactive')

          return (
            <i key={player.id} className={className}></i>
          )
        })}
      </div>
    </div>

    <div className="level-list col-md-4">
      {players.map((player) => (
        <LevelCircle
          key={player.id}
          level={player.level}
          />
      ))}
      <LevelCircle
        key={creator.id}
        level={creator.level}
        />
    </div>
  </div>
);

export default GroupItem

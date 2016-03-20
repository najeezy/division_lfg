import LevelCircle from './level_circle.js.jsx';

const GroupItem = ({ id, mission_name, is_active, creator, players }) => (
  <div className="groupItem col-md-12">
    <div className="col-md-7">
      <h2>{mission_name}</h2>
      <p>created by: {creator.username}</p>
    </div>

    <div className="level-list col-md-5">

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

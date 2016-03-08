import LevelCircle from './level_circle.js.jsx';

export default class GroupItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {background: '#C7C7C6'}
  }

  render() {
    // set levels
    var levels = [];
    this.props.group.players.forEach((player) => {
      levels.push(
        <LevelCircle key={player.id} level={player.level} />
      );
    });

    return (
      <div className="groupItem col-md-12">
        <div className="col-md-7">
          <h2>{this.props.group.mission_name}</h2>
          <p>created by: {this.props.group.creator.username}</p>
        </div>

        <div className="level-list col-md-5">
          {levels}
          <LevelCircle
            key={this.props.group.creator.id}
            level={this.props.group.creator.level}
          />
        </div>
      </div>
    );
  }
}

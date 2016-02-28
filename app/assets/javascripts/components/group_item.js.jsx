class GroupItem extends React.Component {
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
      <div className="groupItem row">
        <div className="col-md-7">
          <h2>{this.props.group.missionName}</h2>
          <p>{this.props.group.time}</p>
        </div>

        <div className="level-list col-md-5">
          {levels}
        </div>
      </div>
    );
  }
}

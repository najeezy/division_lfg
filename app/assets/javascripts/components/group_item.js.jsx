var GroupItem = React.createClass({
  render: function() {
    // set levels
    var levels = [];
    this.props.group.players.forEach(function(player) {
      levels.push(
        <span className="level-circle" key={player.id}>{player.level}</span>
      );
    });

    return (
      <div className="groupItem row">
        <div className="col-md-4">
          <h2>{this.props.group.missionName}</h2>
          <p>{this.props.group.time}</p>
        </div>

        <div className="col-md-8">
          {levels}
        </div>
      </div>
    );
  }
});

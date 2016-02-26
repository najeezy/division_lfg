var GroupList = React.createClass({
  render: function() {

    // create group items
    var groupItems = []
    this.props.groups.forEach(function(group) {
      groupItems.push(<GroupItem key={group.id} group={group} />);
    });

    return (
      <div className="groupList">
        {groupItems}
      </div>
    );
  }
});

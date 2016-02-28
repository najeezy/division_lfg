class GroupList extends React.Component {
  render() {

    // create group items
    var groupItems = [];
    this.props.groups.forEach((group) => {
      groupItems.push(<GroupItem key={group.id} group={group} />);
    });

    return (
      <div className="groupList col-md-12">
        {groupItems}
      </div>
    );
  }
}

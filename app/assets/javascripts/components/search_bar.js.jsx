class SearchBar extends React.Component {
  handleUserInput() {
    var filteredGroups = $.grep(this.props.groups, (group) => {
      group.missionName.includes(event.target.value)
    });

    this.props.onUserInput(filteredGroups);
  }

  render() {
    return (
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search missions..."
          onChange={this.handleUserInput}
        />
      </div>
    );
  }
}

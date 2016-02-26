var FilterableGroupList = React.createClass({
  getInitialState: function() {
    return {groups: []}
  },
  loadGroups: function() {
    $.ajax({
      url: '/groups',
      dataType: 'json',
      success: function(data) {
        this.setState({groups: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadGroups();
  },
  render: function() {
    return (
      <div className="filterableGroupList">
        <SearchBar />
        <GroupList groups={this.state.groups} />
      </div>
    );
  }
});

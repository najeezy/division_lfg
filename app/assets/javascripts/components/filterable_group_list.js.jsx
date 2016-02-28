class FilterableGroupList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {groups: []}
  }

  loadGroups() {
    $.ajax({
      url: '/groups',
      dataType: 'json',
      success: (data) => { this.setState({groups: data}) },
      error(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }
    });
  }

  componentDidMount() {
    this.loadGroups()
  }

  handleFilter(filterdGroups) {
    this.setState({groups: filteredGroups});
  }

  render() {
    return (
      <div className="filterableGroupList">
        <SearchBar onUserInput={this.handleFilter} groups={this.state.groups} />
        <GroupList groups={this.state.groups} />
      </div>
    )
  }
}

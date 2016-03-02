class FilterableGroupList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {groups: []}
    this.handleFilter = this.handleFilter.bind(this);
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

  handleFilter(filteredGroups) {
    this.setState({groups: filteredGroups});
  }

  render() {
    return (
      <div className="filterableGroupList">
        <SearchBar onUserInput={this.handleFilter} />
        <GroupList groups={this.state.groups} />
      </div>
    )
  }
}

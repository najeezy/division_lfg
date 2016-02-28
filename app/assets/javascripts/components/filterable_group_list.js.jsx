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
        <div className="heading row">
          <h1 className="col-md-2"><span>The</span>Division <span>LFG</span></h1>
          <SearchBar
            className="col-md-8"
            onUserInput={this.handleFilter}
            groups={this.state.groups}
          />
        </div>
        <div className="col-md-12">
          <div className="navigation col-md-2">
            <ul>
              <li>Home</li>
              <li>New Group</li>
              <li>My Groups</li>
            </ul>
          </div>
          <div className="col-md-8">
            <GroupList groups={this.state.groups} />
          </div>
        </div>
      </div>
    )
  }
}

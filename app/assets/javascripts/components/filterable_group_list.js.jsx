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

  render() {
    return (
      <div className="filterableGroupList">
        <SearchBar />
        <GroupList groups={this.state.groups} />
      </div>
    )
  }
}

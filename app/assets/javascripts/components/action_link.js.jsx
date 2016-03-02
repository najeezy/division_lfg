class ActionLink extends React.Component {
  render() {
    return (
      <a href={this.props.href}>{this.props.title}</a>
    );
  }
}

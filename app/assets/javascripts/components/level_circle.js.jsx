export default class LevelCircle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {color: '#B8BDBB'}
  }

  setColor() {
    var level = this.props.level
    if (level >= 7 && level <= 12) {
      this.setState({color: '#83E860'});
    } else if (level >= 13 && level <= 18) {
      this.setState({color: '#6A72FF'});
    } else if (level >= 19 && level <= 24) {
      this.setState({color: '#D270E8'});
    } else if (level >= 25 && level <= 30) {
      this.setState({color: '#FFA05C'});
    }
  }

  componentDidMount() {
    this.setColor();
  }

  render() {
    return (
      <span
        className="levelCircle"
        style={{background: this.state.color}}
      >
        {this.props.level}
      </span>
    );
  }

}

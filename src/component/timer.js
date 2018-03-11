import React ,{Component} from 'react';
class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
        // console.log(this.props)
      }
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }
      tick() {
        // console.log("update" ,this.props)
        this.setState(prevState => ({
          seconds: prevState.seconds + 1,
        }));
      }
      render() {
        return (
          <div>
              Seconds: {this.state.seconds}
          </div>
        );
      }
}
export default Timer;
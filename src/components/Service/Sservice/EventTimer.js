import React, { Component } from "react";

class EventTimer extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 1,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }

  componentDidMount() {
    this.deadline = new Date("Oct 08, 2020 21:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div id="countdown" className="row">
        <div className="col-3">
            <div className="box one">
                <div className="text">
                    <p id="day">{days}</p>
                    <span className="text">Days</span>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="box two">
                <div className="text">
                    <p id="hour">{hours}</p>
                    <span className="text">Hours</span>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="box three">
                <div className="text">
                    <p id="minute">{minutes}</p>
                    <span className="text">Minutes</span>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="box four">
                <div className="text">
                    <p id="second">{seconds}</p>
                    <span className="text">Seconds</span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default EventTimer;

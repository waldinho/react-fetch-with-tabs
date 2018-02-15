import React, { Component } from 'react';
import './App.css';
import Week from './components/week.js';
import Month from './components/month.js';
import Year from './components/year.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      monthVisible: false,
      yearVisible: false,
      weekVisible: true
    }
  }

  showWeek() {
    this.setState({
      weekVisible: !this.state.weekVisible,
      monthVisible: false,
      yearVisible: false
    })
  }

  showMonth() {
    this.setState({
      monthVisible: !this.state.monthVisible,
      weekVisible: false,
      yearVisible: false
    })
  }

  showYear() {
    this.setState({
      yearVisible: !this.state.yearVisible,
      weekVisible: false,
      monthVisible: false
    })
  }

  render() {
    let weekClasses = ["week"];
    if (this.state.weekVisible) {
      weekClasses.push("active");
    }
    let monthClasses = ["month"];
    if (this.state.monthVisible) {
      monthClasses.push("active");
    }
    let yearClasses = ["year"];
    if (this.state.yearVisible) {
      yearClasses.push("active");
    }
    return( 
      <div>
        <div className={weekClasses.join(' ')}><h1>Last week</h1><Week />
          <button onClick={this.showMonth.bind(this)} className="showMonth">Show Month</button>
          <button onClick={this.showYear.bind(this)} className="showYear">Show Year</button>
        </div>
        <div className={monthClasses.join(' ')}><h1>Last month</h1><Month />
          <button onClick={this.showWeek.bind(this)} className="showMonth">Show Week</button>
          <button onClick={this.showYear.bind(this)} className="showYear">Show Year</button>
        </div>
        <div className={yearClasses.join(' ')}><h1>Last year</h1><Year />
          <button onClick={this.showWeek.bind(this)} className="showMonth">Show Week</button>
          <button onClick={this.showYear.bind(this)} className="showYear">Show Year</button>
        </div>
        <br/>
      </div>
    )
  }
}

export default App;

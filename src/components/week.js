import React, { Component } from 'react';
import '../App.css';

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://devapi.incentloyalty.com/market/history/INCNT/AUD?period=last_week")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <div key={item.timestamp} className="data">
              <div className="timestamp"><h3>Time:</h3> {item.timestamp}</div>
              <div className="price"><h3>Price:</h3> {item.price}</div> 
            </div>
          ))}
        </ul>
      );
    }
  }
}

export default Week;

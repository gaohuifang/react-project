import React from 'react';
import List from './List';

module.exports = React.createClass({
  getInitialState() {
    const cars = [
      {
        img: 'https://test-m.wkzuche.com/www/images/2@2x.864b0e5.png',
        name: '奔驰'
      },
      {
        img: 'https://test-m.wkzuche.com/www/images/1@2x.1a57243.png',
        name: 'SUV'
      },
      {
        img: 'https://test-m.wkzuche.com/www/images/3@2x.e0e4977.png',
        name: '奥迪'
      }
    ];
    return {
      cars
    };
  },
  render() {
    return (
      <List cars={this.state.cars}/>
    );
  }
});

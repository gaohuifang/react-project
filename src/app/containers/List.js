import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../index.scss';

class List extends Component {
  render() {
    const cars = this.props.cars;
    console.log(cars);
    const items = [];
    cars.map((item, id) => {
      items.push(
        <list key={id}>
          <div className="contain">
            <img src={item.img} alt=""/>
            <span>{item.name}</span>
          </div>
        </list>
      );
      return items;
    });
    return (
      <div>
        {items}
        <p>新增</p>
      </div>
    );
  }
}

List.propTypes = {
  cars: PropTypes.array
};

export default List;

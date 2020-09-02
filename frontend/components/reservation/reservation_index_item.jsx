import React from 'react';

import {Link} from 'react-router-dom'


class ReservationIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteReservation = this.deleteReservation.bind(this);

  }

  // componentDidMount(){
  //   Promise.all([
  //     // this.props.fetchRestaurants(),
  //     this.props.fetchReservation(this.props.reservation.id)
  //   ])
  // }

  deleteReservation(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteReservation(id);
    };
  }

  render() {
    if (!(this.props.restaurants[this.props.reservation.restaurant_id])) return null;
    
    const locationimg = <img className="location-icon" src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/worldwide-location--v1.png" />
    
    const resTime = (parseInt(this.props.reservation.time) - 12)
    return (
      <div className="reservation-index-item">
        <div className="res-img-container">
          <img className="res-img" src={this.props.restaurants[this.props.reservation.restaurant_id].photo}/>
        </div>
        <div className="res-rest-info">
          <Link to={`/restaurants/${this.props.reservation.restaurant_id}`} className="res-rest-name">
            {this.props.reservation.restaurant.name}
          </Link>
          <div className="res-info">Date: {this.props.reservation.date}</div>
          <div className="res-info">Time: {resTime}:00 pm</div>
          <div className="res-info">Party: {this.props.reservation.party}</div>
          <div className="res-location">{locationimg} {this.props.reservation.restaurant.address}, {this.props.reservation.restaurant.city}</div>
          <button
            className="red-btn"
            type="button"
            onClick={this.deleteReservation(this.props.reservation.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default ReservationIndexItem;
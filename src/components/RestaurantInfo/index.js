import React from 'react';
import { faMapMarkerAlt, faUtensilSpoon, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantInfo = (props) => {
  const calculateRating = (ratingArray) => {
    return ratingArray;

  }

  return (
    <div className="ratingContainer">
    <div className="iconContainer" >
      <div>{calculateRating(props.restaurantData.rating)}</div>
      <FontAwesomeIcon className='icon' icon={faStar} />
    </div>
    <button className='mapButton' onClick={() => props.tileClicked()}>            
      <div className="locationContainer">
          <div>{props.restaurantData.postcode}</div>
          <FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
      </div>
    </button>
    <div className="iconContainer">
      <div>{props.restaurantData.dishes.length}</div>
      <FontAwesomeIcon className='icon' icon={faUtensilSpoon} />
    </div>
  </div>
  );
};

export default RestaurantInfo;
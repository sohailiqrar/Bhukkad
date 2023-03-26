import React from "react";

function RestaurantImg(props) {
    return (
        <div>
            <img src={props.url} alt="Restaurant Image" />
        </div>
    );
}

export default RestaurantImg;
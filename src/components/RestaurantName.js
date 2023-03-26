import React from "react";

function RestaurantName(props) {
    return (
        <div className="restName">
            <p>{props.name}</p>
        </div>
    );
}

export default RestaurantName;
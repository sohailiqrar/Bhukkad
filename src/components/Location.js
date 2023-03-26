import React from "react";

function Location(props) {
    return (
        <div className="location">
            <h1 style={{fontSize : '1.5em'}}>
                <img className="location-icon" src="https://cdn-icons-png.flaticon.com/512/684/684908.png" />
                {props.name}
            </h1>
        </div>
    );
}

export default Location;
import React from "react";
import RestaurantImg from "./RestaurantImg";
import RestaurantName from "./RestaurantName";
import GotoIcon from "./GotoIcon";

function Card(props) {
    return(
        // <div className="card">
        //     <RestaurantImg url={props.url}/>
        //     <RestaurantName name={props.name}/>
        //     <GotoIcon />
        // </div>
        <div class="card">
            <img src={props.url} class="card-img" alt="..."/>
            <div class="card-img-overlay">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text text-dark" >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
        </div>
    );

}

export default Card;
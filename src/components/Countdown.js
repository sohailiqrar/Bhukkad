import React, {useState} from "react";



function Countdown() {
    let time = new Date().toLocaleTimeString();  
    let currHours = new Date().getHours(); 
    let currMin = new Date().getMinutes();
    let message = "";

    const [currTime, checkTime] = useState(time);

    function getTime() {
        checkTime(new Date().toLocaleTimeString());
    }

    if(currHours < 9 && currMin < 30) 
        message = "9:30 A.M.";


    setInterval(getTime, 1000);

    return (
        <div className="countdown-message">
            <h1>The next booking slot will start at {currTime}</h1>
        </div> 
    );
}

export default Countdown;
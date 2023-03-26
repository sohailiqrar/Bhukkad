import React from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./Countdown";
import Tagline from "./Tagline";
import Location from "./Location";

function App() {
    return(
        <div>
            <Header />
            <Location name="Chandigarh University"/>
            <Tagline />
            <Countdown />
            <div className="card-section">  
                <Card 
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                    name="Momo Lelo"
                />
                <Card 
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                    name="Sexy Soups"
                />
                <Card 
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                    name="Chicken Bytes"
                />
                <Card 
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                    name="Momo Lelo"
                />
                <Card 
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                    name="Sexy Soups"
                />
                <Card 
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNeT8M_A0M3IdLVU43dmzro4O8YSpSNI0iQ&usqp=CAU"
                    name="Sexy Soups"
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;

import React from "react";
import "./index.css"; // Import the CSS file
import "./SlotMachine";
const App = () => {
    return (
        <>
            <h1 className="heading_style"> 🎰 Welcome to <span style={{fontWeight:'bold'}}> Slot Machine Game </span> 🎰   </h1>
            <div className="slotmachine">
                <SlotM x='😇'   y='😇'  z='😇'/>
                <SlotM x='🥭'   y='🍇'  z='🥭'/>
                <SlotM x='🍎'   y='🍎'  z='🍏'/>
                <SlotM x='🦁'   y='🦁'  z='🦁'/>
                <SlotM x= '🚲'  y='🚌'  z='🚲'/> 

            </div>
            
        </>
    )
}

export default App;

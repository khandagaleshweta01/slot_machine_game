import React from "react";
import "./index.css"; // Import the CSS file

const  SlotM = () => {
    let x = '😄';
    let y = '😄'; 
    let z = '😻'; 

    if( (x===y) && (y===z) ){
        return(
            <>
                <div className="slot_inner">
                    <h1 style={{ textAlign: 'center' }}>
                        <span>{x}</span>
                        <span>{y}</span>
                        <span>{z}</span>
                    </h1>
                    <h2 style={{ textAlign: 'center' }}>This is Matching</h2>
                    <hr/>
                </div>
            </>
        );
    }
    else{
        return(
        <>
                <div className="slot_inner">
                    <h1 style={{ textAlign: 'center' }}>
                        <span>{x}</span>
                        <span>{y}</span>
                        <span>{z}</span>
                    </h1>
                    <h2 style={{ textAlign: 'center' }}>This is Not Matching</h2>
                    <hr/>
                </div>
            </>
        );
    }
}

const App = () => {
    return (
        <>
            <h1 className="heading_style"> 🎰 Welcome to <span style={{fontWeight:'bold'}}> Slot Machine Game </span> 🎰   </h1>
            <SlotM/>
            <SlotM/>
            <SlotM/>
        </>
    )
}

export default App;

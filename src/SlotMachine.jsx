import React from "react";
const  SlotMachine = (props) => {
    // let x = '😄';
    // let y = '😄'; 
    // let z = '😻'; 

    let x = props.x;
    let y = props.y;
    let z = props.z;
    if( ( x===y) && ( y===z ) ){
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
export default SlotMachine;

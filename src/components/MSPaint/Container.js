import React, {useState} from 'react'

function Container({utensil}) {
    const {tool, color} = utensil;

    const [magic, SetMagic] = useState({
        width: "100%",
        height:"800px",
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "black",
        // borderStyle: "groove",
    })
    
    function handleBucket(){
        if(tool === "bucket"){
            const newItem = {
                ...magic,
                backgroundColor: color
            }
            SetMagic(newItem)
        }
    }

    return (
        <div style={magic} onClick={handleBucket} />
    );
}

export default Container
import React from 'react';
import './Header.css'

function ColorCard({color, handleUtensil}) {
    return (
       <div onClick={()=>handleUtensil(color, "color")}className="color-icon" style={{backgroundColor:`${color}`}}>
       </div>
    );
}

export default ColorCard;
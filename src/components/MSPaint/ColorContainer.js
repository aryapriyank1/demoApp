import React from 'react';
import ColorCard from './ColorCard'

const colorList = ["red", "blue", "green", "yellow", "pink", "black", "white", "brown", "purple", "grey", "orange"];

function ColorContainer({handleUtensil}) {
    
    const colorGrid = colorList.map((color) => <ColorCard handleUtensil={handleUtensil} key={color} color={color}/>)
    return (
        <div id="color-grid">
            {colorGrid}
        </div>
    );
}

export default ColorContainer;
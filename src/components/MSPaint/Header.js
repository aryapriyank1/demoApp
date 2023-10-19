import React from 'react';
import ColorContainer from './ColorContainer';
import './Header.css'

function Header({handleUtensil}) {

    return (
        <>
            <div id="header">
                <ColorContainer handleUtensil={handleUtensil}/>
            </div>
        </>
    );
}

export default Header;
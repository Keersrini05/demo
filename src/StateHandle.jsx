import React from 'react'
//import ImageIcon from './cafe cup.png'
import AcUnitIcon from '@mui/icons-material/AcUnit';
const StateHandle = () => {
    function message() {
        open("https://wallpaper.mob.org/pc/")

    }
    return (
        <div>
            <span onClick={message}>
                <AcUnitIcon />
            </span>
        </div>
    )
}

export default StateHandle
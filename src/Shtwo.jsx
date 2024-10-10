import React, { useState } from 'react'
import Img from './cafe cup.png'
import Do from './cafe menu.png'


const Shtwo = () => {
    const [name, setName] = useState("Hi Welcome To My Site")
    const [like, setLike] = useState(0)
    const [currentImage, setCurrentImage] = useState(Img);

    function resetName() {
        setName("Hi Welcome To My Site");
    }
    function hello() {
        setName("KEERTHANA")
    }
    function decrement() {
        if (like == 0) {
            setLike(0)
        }
        else {
            setLike(like - 1)
        }
    }

    function handleImageHover() {
        setCurrentImage(Do);

    }
    function handleImageOut() {
        setCurrentImage(Img);

    }
    return (
        <div>
            <h1 onMouseOver={hello}
                onMouseOut={resetName}>
                <center>{name}</center></h1>
            <img src={currentImage} alt=" " onMouseOver={handleImageHover} onMouseOut={handleImageOut} />
            <p>
                {like}


            </p>

            <button onClick={() => setLike(like + 1)} >Like</button>
            <button onClick={decrement} >Dislike</button>
        </div >
    )
}



export default Shtwo
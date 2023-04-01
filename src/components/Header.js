import React from "react";
import trollFace from './img/troll-face.png'

export default function Header() {
    return (
        <header>
            <img src={trollFace} alt="none" className="trollFace" />
            <h2>Meme Generator</h2>
        </header>
    )
}
import React from "react";

export default function Meme() {
    const [memes , setMemes] = React.useState({
        topText:"",
        bottomText:"",
        randomImg:"https://i.imgflip.com/1g8my4.jpg"
    })
    
    const [allMemes, setAllMems] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMems(data.data.memes))
    }, [])

    function getRandomImg() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMemes(prevMemes => {
            return {
                ...prevMemes,
                randomImg: url
            }
        })
    }

    function handleChange(event) {
        setMemes(prevMemes => {
            return {
                ...prevMemes,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <main>
            <form className="main-form">
                <input 
                type="text"
                placeholder="top Text"
                name="topText" 
                value={memes.topText}
                onChange={handleChange}
                />
                <input 
                type="text"
                placeholder="bottom Text" 
                name="bottomText"
                value={memes.bottomText}
                onChange={handleChange}
                />
            </form>

            <div className="main-btn">
                <button 
                className="btn" 
                onClick={getRandomImg}
                
                >Get New Image</button>
            </div>

            <div className="main-div">
            <img src={memes.randomImg} alt="none" className="main-img" />
            <h1 className="top-text">{memes.topText}</h1>
            <h1 className="bottom-text">{memes.bottomText}</h1>
            </div>
        </main>
    )
}
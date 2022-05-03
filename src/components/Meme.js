import dog from '../images/corndoggg.png'
import memesData from '../data/memesData';
import React from 'react'

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState({
        topText:"top",
        bottomText:"bot",
        randomImage:"https://i.imgflip.com/1g8my4.jpg"
    });

    const[textInput, setTextInput] = React.useState({topText:"", botText:""});
    

    function toggle(event){
        const {name, value} = event.target
        setTextInput(prevState =>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function changeMeme(){
        setMemeImage(prev =>({
            ...prev,
            randomImage:getMemeImage()
        }))
    }
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        return memesArray[randomNumber].url
    }

    return(
        <main>
            <div className='form'>
                <input 
                onChange={toggle}
                name="topText"
                className='form-input'
                placeholder='Top text'
                value={textInput.topText}>
                </input>
                <input 
                onChange={toggle}
                 name="botText" 
                 className='form-input' 
                 placeholder='Bot text' 
                 value={textInput.botText}>
                 </input>
                <button onClick={changeMeme} className='form-button'>Get a new meme image</button>
            </div>
            <div className='meme'>
                <img className="meme--image" src={memeImage.randomImage}/>
                <h2 className="meme--text top">{textInput.topText}</h2>
                <h2 className="meme--text bottom">{textInput.botText}</h2>
            </div>
        </main>
    );
}
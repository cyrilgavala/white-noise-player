import './App.css';
import {PlayButton} from "./components/PlayButton";
import {Footer} from "./components/Footer";
import React from 'react';

function App() {

    const makePlayButton = (label: string) => <PlayButton key={label}
                                                          url={`sounds/${label}.mp3`}
                                                          image={`./pictures/${label}.jpg`}/>

    return <div className="App">
        <div className="buttons-wrapper">
            {makePlayButton("rain")}
            {makePlayButton("train")}
            {makePlayButton("waves")}
            {makePlayButton("blender")}
            {makePlayButton("engine")}
            {makePlayButton("vacuum")}
        </div>
        <Footer/>
    </div>
}

export default App;

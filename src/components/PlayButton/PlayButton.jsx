import useAudio from "../../hooks/useAudio";
import styles from "./PlayButton.module.css";
import {useState} from "react";

const PlayButton = ({url, image}) => {
    const [volume, setVolume] = useState("0.5");
    const [playing, toggle] = useAudio(url, volume);

    const handleVolumeChange = event => {
        event.preventDefault();
        setVolume(event.target.value);
    }

    return (
        <div className={styles.buttonWrapper + (playing ? ` ${styles.playing}` : "")}
             style={{backgroundImage: `url(${image})`}}
             onClick={toggle}>
            <button className={styles.toggleBtn}>
                <i className={playing ? "fa-solid fa-pause" : "fa-solid fa-play"}/>
            </button>
            <input className={styles.volumeRangeInput} type="range" min="0" max="1" step="0.1" value={volume}
                   onChange={handleVolumeChange}/>
        </div>
    );
}

export default PlayButton;
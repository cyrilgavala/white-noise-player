import {useAudio} from "../hooks/useAudio";
import styles from "./PlayButton.module.css";
import React, {useState} from "react";

interface Props {
    url: string;
    image: string;
}

export const PlayButton: React.FC<Props> = (props) => {
    const [volume, setVolume] = useState<number>(0.5);
    const [repeat, setRepeat] = useState<boolean>(false);
    const [playing, toggle] = useAudio(props.url, volume, repeat);

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setVolume(Number(event.target.value));
    }

    return <div className={styles.wrapper + (playing ? " " + styles.playing : "")}
                style={{backgroundImage: `url(${props.image})`}}
    >
        <div className={styles.buttonsWrapper}>
            <button className={styles.button + " " + (repeat ? styles.active : styles.inactive)}
                    onClick={() => setRepeat(!repeat)}
            >
                <i className="fa fa-repeat"/>
            </button>
            <button className={styles.button}
                    onClick={() => toggle()}
            >
                <i className={playing ? "fa-solid fa-pause" : "fa-solid fa-play"}/>
            </button>
        </div>
        <input className={styles.volumeRangeInput}
               type="range"
               min="0"
               max="1"
               step="0.1"
               value={volume}
               onChange={handleVolumeChange}/>
    </div>
}
import useAudio from "../../hooks/useAudio";

const PlayButton = ({url, image}) => {
    const [playing, toggle] = useAudio(url);

    return (
        <button className={playing ? "toggle-btn active" : "toggle-btn"}
                onClick={toggle} style={{backgroundImage: `url(${image})`}}>
            <i className={playing ? "fa-solid fa-pause" : "fa-solid fa-play"}/>
        </button>
    );
}

export default PlayButton;
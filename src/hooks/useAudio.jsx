import {useEffect, useMemo, useState} from "react";

const useAudio = url => {
    const audio = useMemo(() => new Audio(url), [url]);
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
            console.log(audio)
            playing ? audio.play() : audio.pause();
        },
        [playing, audio]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

export default useAudio;
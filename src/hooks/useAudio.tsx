import {useEffect, useMemo, useState} from "react";

export const useAudio = (url: string, volume: number, repeat: boolean): [boolean, () => void] => {
    const audio = useMemo(() => new Audio(url), [url]);
    const [playing, setPlaying] = useState<boolean>(false);

    const toggle = (): void => setPlaying(!playing);

    useEffect(() => {
            audio.volume = volume;
            playing ? audio.play() : audio.pause();
        },
        [playing, audio, volume]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(repeat));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(repeat));
        };
    }, [audio, repeat]);

    return [playing, toggle];
};
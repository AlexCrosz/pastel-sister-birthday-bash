import { useEffect, useRef, useState } from 'react';

export const useBackgroundMusic = (src: string, autoPlay: boolean = false) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(src);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.6; 

            audioRef.current.addEventListener('canplaythrough', () => {
                setIsReady(true);
            });

            audioRef.current.addEventListener('error', (e) => {
                console.error("Error memuat atau memutar audio:", e);
            });
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = ""; 
                audioRef.current = null;
            }
        };
    }, [src]);

    useEffect(() => {
        if (autoPlay && isReady && audioRef.current) {
            play();
        }
    }, [autoPlay, isReady, src]); // Tambahkan src ke dependency array

    const play = async () => {
        if (audioRef.current) {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.log('Audio play failed (mungkin karena batasan browser):', error);
            }
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggle = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    };

    return { play, pause, toggle, isPlaying, isReady };
};

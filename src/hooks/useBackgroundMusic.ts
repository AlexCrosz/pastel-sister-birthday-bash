import { useEffect, useRef, useState } from 'react';

export const useBackgroundMusic = (autoPlay: boolean = false) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Create audio element with a public domain birthday music or use a placeholder
    // Using a soft piano birthday melody from a public source
    audioRef.current = new Audio('https://www.bensound.com/bensound-music/bensound-birthdayparty.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Soft background volume
    
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsReady(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (autoPlay && isReady && audioRef.current) {
      play();
    }
  }, [autoPlay, isReady]);

  const play = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Audio play failed:', error);
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

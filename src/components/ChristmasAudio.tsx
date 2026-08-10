"use client";

import { useEffect, useState, useRef } from "react";

export default function ChristmasAudio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isMutedRef = useRef(isMuted);

  // Keep ref in sync with state
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt to play on mount
    const attemptPlay = async () => {
      try {
        // Use ref to always get the latest muted state
        audio.muted = isMutedRef.current; // Sync muted state
        audio.volume = 0.7; // Set volume
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
        }
      } catch {
        // Auto-play blocked by browser, will need user interaction
        console.log("Autoplay blocked, waiting for user interaction");
        setIsPlaying(false);
      }
    };

    // Wait for audio to be ready - use loadeddata for better reliability
    const handleLoadedData = () => {
      attemptPlay();
    };

    const handleCanPlay = () => {
      attemptPlay();
    };

    // Try multiple events to catch when audio is ready
    if (audio.readyState >= 3) {
      // Audio already loaded enough
      setTimeout(() => attemptPlay(), 100);
    } else {
      audio.addEventListener("loadeddata", handleLoadedData, { once: true });
      audio.addEventListener("canplay", handleCanPlay, { once: true });
      audio.addEventListener("canplaythrough", handleCanPlay, { once: true });
      // Also try to load immediately
      audio.load();
    }

    // Also try after a short delay as fallback
    const timeoutId = setTimeout(() => {
      if (audio.paused) {
        attemptPlay();
      }
    }, 500);

    // Fallback: Auto-play when user interacts (for browsers that block autoplay)
    const handleUserInteraction = () => {
      if (audio.paused) {
        // Sync muted state before playing
        audio.muted = isMutedRef.current;
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            console.log("Play failed");
          });
      }
    };

    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("keydown", handleUserInteraction, { once: true });
    document.addEventListener("touchstart", handleUserInteraction, {
      once: true
    });

    return () => {
      clearTimeout(timeoutId);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("canplaythrough", handleCanPlay);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [isMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Auto-play blocked
      });
    }
    // State will be updated by onPlay/onPause handlers on the audio element
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        autoPlay
        loop
        preload="auto"
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => {
          // Try to play when data is loaded
          const audio = audioRef.current;
          if (audio) {
            audio.play().catch(() => {
              // Autoplay blocked
            });
          }
        }}
      >
        {/* Add your Christmas audio file in the public folder */}
        <source src="/audio/christmas-music.mp3" type="audio/mpeg" />
        {/* Example: <source src="/audio/christmas-music.ogg" type="audio/ogg" /> */}
        Your browser does not support the audio element.
      </audio>

      {/* Audio controls - fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border-2 border-gray-800 bg-white px-4 py-2 shadow-2xl">
        <button
          onClick={togglePlay}
          className="rounded-full p-2 text-black hover:bg-gray-200 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          onClick={toggleMute}
          className="rounded-full p-2 text-black hover:bg-gray-200 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}

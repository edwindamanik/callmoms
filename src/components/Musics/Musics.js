import React, { useState } from "react";
import "./Musics.css";
import { MeditationImage } from "../../assets/images";
import Sound from 'react-sound';
import ArcadeMusic from '../../assets/musics/arcade-music.mp3';

const Musics = () => {
  const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);

  const handleButtonClick = () => {
    if (playStatus === Sound.status.PLAYING) {
      setPlayStatus(Sound.status.PAUSED);
    } else if (playStatus === Sound.status.PAUSED) {
      setPlayStatus(Sound.status.PLAYING);
    } else {
      setPlayStatus(Sound.status.PLAYING);
    }
  };

  const handleStopClick = () => {
    setPlayStatus(Sound.status.STOPPED);
  };

  const handleFinishedPlaying = () => {
    // This callback is called when the music is finished
    setPlayStatus(Sound.status.STOPPED);
  };

  return (
    <div className="card-music">
      <div className="image-music-wrapper">
        <img src={MeditationImage} alt="" />
      </div>
      <div className="button-music-wrapper">
        <button type="button" onClick={handleButtonClick}>
          {playStatus === Sound.status.PLAYING ? "Pause" : "Play"}
        </button>
        {playStatus !== Sound.status.STOPPED && (
          <button type="button" onClick={handleStopClick}>
            Stop
          </button>
        )}
      </div>
      <Sound
        url={ArcadeMusic}
        playStatus={playStatus}
        onFinishedPlaying={handleFinishedPlaying}
      />
    </div>
  );
};

export default Musics;

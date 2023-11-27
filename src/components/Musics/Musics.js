import React, { useState } from "react";
import "./Musics.css";
import { MeditationImage } from "../../assets/images";
import Sound from "react-sound";
import audioFile from "../../assets/musics/arcade-music.wav";

const Musics = () => {
  const [isPlaying, setPlaying] = useState(false);

  const handleButtonClick = () => {
    setPlaying(!isPlaying);
  };

  return (
    <div className="card-music">
      <div className="image-music-wrapper">
        <img src={MeditationImage} alt="" />
      </div>
      <div className="button-music-wrapper">
        <button type="button" onClick={handleButtonClick}>
          {isPlaying ? "Stop" : "Dengarkan"}
        </button>
      </div>
      <Sound
        url={audioFile}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setPlaying(false)}
      />
    </div>
  );
};

export default Musics;

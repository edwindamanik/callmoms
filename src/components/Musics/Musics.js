import React from 'react'
import './Musics.css'
import { MeditationImage } from '../../assets/images'

const Musics = () => {
  return (
    <div className='card-music'>
        <div className='image-music-wrapper'>
        <img src={MeditationImage} alt='' />
        </div>
        <div className='button-music-wrapper'>
        <button type='button'>Dengarkan</button>
        </div>
    </div>
  )
}

export default Musics
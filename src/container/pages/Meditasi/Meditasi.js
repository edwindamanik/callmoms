import React from 'react'
import './Meditasi.css'
import Template from '../../template/'
import { Musics } from '../../../components'

const Meditasi = () => {
  return (
    <Template>
        <div className='meditasi-wrapper'>
            <h4>Pilih Musik Relaksasi</h4>
            <div className='music-wrapper'>
                <Musics />
                <Musics />
                <Musics />
                <Musics />
                <Musics />
                <Musics />
            </div>
        </div>
    </Template>
  )
}

export default Meditasi
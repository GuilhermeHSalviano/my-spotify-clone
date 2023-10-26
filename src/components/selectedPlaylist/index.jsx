import styles from './selectedPlaylist.module.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PlaylistTracks from './playlistTracks/index.jsx';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

export default function SelectedPlaylist() {
    let location = useLocation()
    let [playlistName, setPlaylistName] = useState('')
    let [playlistPicture, setPlaylistPicture] = useState('')
    let [isPublic, setIsPublic] = useState('')
    let [playlistAuthorAndTrackNumber, setPlaylistAuthorAndTrackNumber] = useState('')
    useEffect(()=>{
        if(location.state != null){
            setPlaylistName(location.state.name)
            setPlaylistPicture(location.state.images[0].url)
            setIsPublic(location.state.public? "Public Playlist" : 'Private Playlist')
            setPlaylistAuthorAndTrackNumber(location.state.owner.display_name + " - " + location.state.tracks.total + " songs")

        } 
    }, [location])
    

    return (
        <div className={styles.container}>
            <div className={styles.container__playlist}>
                <img src={playlistPicture} 
                    alt="imagem de quatro álbuns pertencentes à playlist" 
                    className={styles.container__img} 
                />
                <div className={styles.container__playlist__name}>
                    <p>{isPublic}</p>
                    <h1>{playlistName}</h1>
                    <p>{playlistAuthorAndTrackNumber}</p>
                </div>
            </div>
            <PlaylistTracks 
                playlist={location.state != null? location.state : ''}
            />
        </div>
    )
}

import styles from './selectedPlaylist.module.scss';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PlaylistTracks from './playlistTracks/index.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef } from 'react';

export default function SelectedPlaylist() {
    let location = useLocation()
    let [playlistName, setPlaylistName] = useState('')
    let [playlistPicture, setPlaylistPicture] = useState('')
    let [isPublic, setIsPublic] = useState('')
    let [playlistAuthorAndTrackNumber, setPlaylistAuthorAndTrackNumber] = useState('');
    let [inputSearchField, setInputSearchField] = useState('');
    const input = useRef(null);
    useEffect(()=>{
        if(location.state != null){
            setPlaylistName(location.state.name)
            setPlaylistPicture(location.state.images[0].url)
            setIsPublic(location.state.public? "Public Playlist" : 'Private Playlist')
            setPlaylistAuthorAndTrackNumber(location.state.owner.display_name + " - " + location.state.tracks.total + " songs")

        } 
    }, [location])

    const inputEventHandler = (inputText) => {
        setInputSearchField(inputText.target.value);
    }

    function toggleInput(){
      input.current.classList.toggle(styles["input-inactive"]);         
    }
    
    return (
      <div className={styles.container}>
        <div className={styles.container__playlist}>
          <img
            src={playlistPicture}
            alt="imagem de quatro álbuns pertencentes à playlist"
            className={styles.container__img}
          />
          <div className={styles.container__playlist__name}>
            <p>{isPublic}</p>
            <h1>{playlistName}</h1>
            <p>{playlistAuthorAndTrackNumber}</p>
          </div>
        </div>
        <div className={styles.container__input}>
          <FontAwesomeIcon className={styles.input__magnifyingGlass} icon={faMagnifyingGlass} onClick={toggleInput}/>
          <input  type="text" onChange={(event) => inputEventHandler(event)} ref={input} />
        </div>
        <PlaylistTracks
          playlist={location.state != null ? location.state : ""}
          inputSearchField={inputSearchField}
        />
      </div>
    );
}

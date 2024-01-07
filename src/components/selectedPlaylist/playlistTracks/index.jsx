import styles from "./playlistTracks.module.scss"
import { milisecondsConverter, turnDateObjectIntoString } from "../../../functions.js"
import { useEffect, useState, useContext } from "react"
import { playlistsContext } from "../../../pages/homePage/index.jsx"

export default function PlaylistTracks({playlist}) {

    const [tracks, setTracks] = useState(playlist? playlist.tracks.items : "")
    const [trackOrder, setTrackOrder] = useState(+1)
    const{selectSong} = useContext(playlistsContext)

    let count = 0

    useEffect(() => {
        setTracks(playlist ? playlist.tracks.items : "");
    }, [playlist]);

    function sortByTrackName(){
        let songs = [...tracks]
        songs = songs.sort((a, b) => {
          if( a.track.name < b.track.name) return trackOrder * (-1)
          if (a.track.name > b.track.name) return trackOrder * 1
          return 0
        })
        setTracks(songs)
        setTrackOrder(-trackOrder)
    }  
    
    function sortByAlbum(){
      let songs = [...tracks]
      songs = songs.sort((a, b) => {
        if (a.track.album.name < b.track.album.name) return trackOrder * -1;
        if (a.track.album.name > b.track.album.name) return trackOrder * 1;
        return 0;
      });
      setTracks(songs)
      setTrackOrder(-trackOrder)
    }

    function sortByDataAdded(){
      let songs = [...tracks];
      songs = songs.sort((a, b) => {
        if (a.added_at < b.added_at) return trackOrder * -1;
        if (a.added_at > b.added_at) return trackOrder * 1;
          return 0;
      })
      setTracks(songs)
      setTrackOrder(-trackOrder)
    }

    function sortByDuration(){
      let songs = [...tracks];
      songs = songs.sort((a, b) => {
        if (a.track.duration_ms < b.track.duration_ms) return trackOrder * -1;
        if (a.track.duration_ms > b.track.duration_ms) return trackOrder * 1;
        return 0;
      });
      setTracks(songs);
      setTrackOrder(-trackOrder);
    }

    if(!tracks){
        return ''
    } else{    
        return (
          <table className={styles.container}>
            <thead>
              <tr className={styles.container__header}>
                <th>#</th>
                <th>
                  <span onClick={()=> sortByTrackName()}>Title</span>
                </th>
                <th>
                  <span onClick={() => sortByAlbum()}>Album</span>
                </th>
                <th>
                  <span onClick={() => sortByDataAdded()}>Data added</span>
                </th>
                <th>
                  <span onClick={() => sortByDuration()}>Duration</span>
                </th>
              </tr>
            </thead>
            <tbody className={styles.container__body}>
              {tracks.map((playlist) => {
                count += 1;
                return (
                  <tr 
                    key={playlist.track.id} 
                    className={styles.container__tr}
                    onClick={() => selectSong(playlist)}
                  >
                    <td>{count}</td>
                    <td>
                      <img
                        src={playlist.track.album.images[1].url}
                        alt="Foto da capa do álbum"
                      />
                      <div>
                        <p id={styles.track__name}>{playlist.track.name}</p>
                        <p>{playlist.track.artists[0].name}</p>
                      </div>
                    </td>
                    <td>{playlist.track.album.name}</td>
                    <td>{turnDateObjectIntoString(playlist.added_at)}</td>
                    <td>{milisecondsConverter(playlist.track.duration_ms)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
    }
}

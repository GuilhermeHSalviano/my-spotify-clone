import styles from "./playlistTracks.module.scss"
import { milisecondsConverter } from "../../../functions.js"
import { useEffect, useState } from "react"

export default function PlaylistTracks({playlist}) {

    const [tracks, setTracks] = useState(playlist? playlist.tracks.items : "")
    const [trackOrder, setTrackOrder] = useState(+1)

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
      songs = songs.sort((a, b) => new Date(b.date) - new Date(a.date))
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
                <th onClick={() => sortByTrackName()}>Title</th>
                <th onClick={() => sortByAlbum()}>Album</th>
                <th onClick={() => sortByDataAdded()}>Data added</th>
                <th onClick={() => sortByDuration()}>Duration</th>
              </tr>
            </thead>
            <tbody className={styles.container__body}>
              {tracks.map((playlist) => {
                count += 1;
                return (
                  <tr key={playlist.track.id} className={styles.container__tr}>
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
                    <td>{playlist.added_at}</td>
                    <td>{milisecondsConverter(playlist.track.duration_ms)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
    }
}

import styles from "./playlistTracks.module.scss"
import { milisecondsConverter, toSortTracks } from "../../../functions.js"
import { useEffect, useState } from "react"

export default function PlaylistTracks({playlist}) {
    

    const [tracks, setTracks] = useState(playlist? playlist.tracks.items : "")
    const [order, setOrder] = useState(+1)

    let count = 0

    useEffect(() => {
        setTracks(playlist ? playlist.tracks.items : "");
    }, [playlist]);

    function sortByTrackName(){
        let songs = toSortTracks(tracks, "track", "name", order)
        setTracks(songs)
        setOrder(-order)
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
                <th>Album</th>
                <th>Data added</th>
                <th>Duration</th>
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

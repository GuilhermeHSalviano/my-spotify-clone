import styles from "./playlistTracks.module.scss"
import { milisecondsConverter } from "../../../functions.js"

export default function PlaylistTracks({playlist}) {
    let count = 0

    if(!playlist){
        return ''
    } else{    
        return (
            <table className={styles.container}>
                <thead className={styles.container__row} id={styles.container__header}>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Data added</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody className={styles.container__body}>
                    {playlist.tracks.items.map((playlist) => {
                        count += 1
                        return(
                            <tr className={styles.container__row} key={playlist.track.id}>
                                <td>{count}</td>
                                <td>
                                    <img src={playlist.track.album.images[1].url} alt="Foto da capa do álbum" />
                                    <div>
                                        <p>{playlist.track.name}</p>
                                        <p>{playlist.track.artists[0].name}</p>
                                    </div>
                                </td>
                                <td>{playlist.track.album.name}</td>
                                <td>{playlist.added_at}</td>
                                <td>{milisecondsConverter(playlist.track.duration_ms)}</td>
                            </tr>
                        )
                        }
                    )}
                </tbody>
            </table>
        )
    }
}

import styles from "./playlistTracks.module.scss"

export default function PlaylistTracks({playlist}) {
    let count = 0
    return (
        <table className={styles.container}>
            <tr className={styles.container__row}>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>Data added</th>
                <th>Duration</th>
            </tr>
            {   
                playlist.tracks.items.map((playlist) => {
                count += 1
                return(
                    <tr className={styles.container__row}>
                        <td>{count}</td>
                        <td>
                            <img src={playlist.track.album.images[1].url} alt="Foto da capa do álbum" />
                            <div>
                                <p>{playlist.track.name}</p>
                                <p>{playlist.track.album.name}</p>
                            </div>
                        </td>
                    </tr>
                )
                }
            )}
        </table>
    )
}

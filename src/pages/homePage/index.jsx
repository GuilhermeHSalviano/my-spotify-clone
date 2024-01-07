import LeftMenu from "../../components/leftMenu/index.jsx"
import styles from "./homePage.module.scss"
import MyFooter from "../../components/myFooter/index.jsx"
import { Outlet } from 'react-router-dom'
import { createContext, useState } from "react"

export const playlistsContext = createContext()

export default function HomePage({playlists}) {

  const [selectedSong, setSelectedSong] = useState("");

  const selectSong = (song) => {
    setSelectedSong(song);
  };


	return (
    <>
      <playlistsContext.Provider value={{playlists, selectSong}}>
          <main className={styles.container}>
            <LeftMenu />
            <Outlet />
          </main>
          <MyFooter selectedSong={selectedSong}/>
      </playlistsContext.Provider>
    </>
  );
}

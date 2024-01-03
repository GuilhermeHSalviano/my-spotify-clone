import LeftMenu from "../../components/leftMenu/index.jsx"
import styles from "./homePage.module.scss"
import MyFooter from "../../components/myFooter/index.jsx"
import { Outlet } from 'react-router-dom'
import { createContext, useState } from "react"

export const playlistsContext = createContext()

export default function HomePage({playlists}) {

  const [songSelected, setSongSelected] = useState("");

  const selectSong = (song) => {
    console.log('teste')
    //setSongSelected(song);
  };


	return (
    <>
      <playlistsContext.Provider value={{playlists, selectSong}}>
          <main className={styles.container}>
            <LeftMenu />
            <Outlet />
          </main>
          <MyFooter />
      </playlistsContext.Provider>
    </>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/index.jsx";
import LoginPage from './pages/loginPage/index.jsx';
import HomeInfo from './components/homeInfo/index.jsx'
import Search from "./components/search/index.jsx";
import "./reset.scss"
import { useState } from "react";
import { setToken, getMyPlaylist } from "./functions.js";


export default function App() {
	const [playlists, setPlaylists] = useState([])

	async function settingPlaylistsToState(){
		setToken()
		let token = JSON.parse(sessionStorage.getItem('token'))
		let playlists = await getMyPlaylist("https://api.spotify.com/v1/me/playlists", token)
		setPlaylists(playlists.items)
	}

	window.onload = () => {
		settingPlaylistsToState();
	};

  	return (
		<Routes>
			<Route path='/' element={<LoginPage/>} index/>
			<Route path='/home/:access_token' Component={()=> <HomePage playlists={playlists}/>}>
				<Route path='/home/:access_token' index Component={()=> <HomeInfo playlists={playlists}/>}></Route>
				<Route path="/home/:access_token/search" element={<Search/>} ></Route>
			</Route>
		</Routes>
  	)
}

	




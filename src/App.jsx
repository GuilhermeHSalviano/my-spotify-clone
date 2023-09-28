import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/index.jsx";
import LoginPage from './pages/loginPage/index.jsx';
import HomeInfo from './components/homeInfo/index.jsx'
import Search from "./components/search/index.jsx";


import "./reset.scss"

export default function App() {
  	return (
		<Routes>
			<Route path='/' element={<LoginPage/>} index/>
			<Route path='/home/:access_token' element={<HomePage/>}>
				<Route path='/home/:access_token' index element={<HomeInfo/>}></Route>
				<Route path="/home/:access_token/search" element={<Search/>} ></Route>
			</Route>
		</Routes>
		
  	)
}

	




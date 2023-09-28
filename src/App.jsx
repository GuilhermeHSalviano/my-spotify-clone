import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/index.jsx";
import LoginPage from './pages/loginPage/index.jsx'

import "./reset.scss"

export default function App() {
  	return (
		<Routes>
			<Route path='/' element={<LoginPage/>}/>
			<Route path='/home/:access_token'  element={<HomePage/>}/>
		</Routes>
		
  	)
}

	




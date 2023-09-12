import React from "react";
import HomePage from "./pages/loginPage";

import "./reset.scss"

class App extends React.Component{
	constructor(props){
		super(props)
		const params = this.getHashParams()
		const token = params.access_token
		this.state = token
	}

	getHashParams() {
		var hashParams = {};
		var e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ( e = r.exec(q)) {
		   hashParams[e[1]] = decodeURIComponent(e[2]);
		}

		console.log(this.token)
		return hashParams;
	}

	render(){
		return(
			<>
				<HomePage></HomePage>				
			</>		
		)
	}
}

export default App



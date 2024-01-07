import { useState } from "react";
import styles from "./myFooter.module.scss";

export default function MyFooter(song) {
	
	return (
		<footer className={styles.container}>
			<div className={styles.container__folder}>
			<img src={""} alt="" />
			<div>
				<p>{''}</p>
				<p></p>
			</div>
			</div>
		</footer>
	);
	
	
}

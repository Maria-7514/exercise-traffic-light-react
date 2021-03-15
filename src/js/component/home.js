import React, { useState } from "react";
//include images into your bundle

//create your first component
export function Home() {
	let [luz1, setluz1] = useState("Apagada");
	let [luz2, setluz2] = useState("Apagada");
	let [luz3, setluz3] = useState("Apagada");

	function cambio1() {
		if (luz1 === "Apagada") {
			setluz1("Encendida");
		} else {
			setluz1("Apagada");
		}
	}

	function cambio2() {
		if (luz2 === "Apagada") {
			setluz2("Encendida");
		} else {
			setluz2("Apagada");
		}
	}

	function cambio3() {
		if (luz3 === "Apagada") {
			setluz3("Encendida");
		} else {
			setluz3("Apagada");
		}
	}

	return (
		<div className="text-center mt-5">
			<div className="top"></div>
			<div className=" luces">
				<button
					onClick={cambio1}
					className={
						"luz roja" + (luz1 == "Apagada" ? " shadow" : "")
					}>
					{setluz1}
				</button>
				<button
					onClick={cambio2}
					className={
						" luz amarilla" + (luz2 == "Apagada" ? " shadow" : "")
					}>
					{setluz2}
				</button>
				<button
					onClick={cambio3}
					className={
						" luz verde" + (luz3 == "Apagada" ? " shadow" : "")
					}>
					{setluz3}
				</button>
			</div>
		</div>
	);
}

import React from "react";
import DarkMode from "./DarkMode";

function Nav() {
	return (
		<div id="nav">
			<ul>
				<li>
					<a href="#profile">Profile</a>
				</li>
				<li>
					<a href="#experiences">Experiences</a>
				</li>
				<li>
					<a href="#abilities">Abilities</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">Contacts</a>
				</li>
			</ul>
			<DarkMode />
		</div>
	);
}

export default Nav;

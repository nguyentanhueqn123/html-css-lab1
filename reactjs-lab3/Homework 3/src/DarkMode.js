import React from "react";

function DarkMode() {
	function handleOnClick() {
		var body = document.querySelector("body");
		body.classList.toggle("darkMode");
	}
	return (
		<div id="darkMode" onClick={handleOnClick}>
			<i class="bx bxs-moon"></i>
		</div>
	);
}

export default DarkMode;

import React from "react";

function Item(props) {
	function phatAmThanh(SoundSrc) {
		let sound = new Audio(SoundSrc);
		sound.play();
	}
	return (
		<div className="Item">
			<img
				src={props.ImgSrc}
				alt=""
				onClick={() => {
					phatAmThanh(props.SoundSrc);
				}}
			/>
		</div>
	);
}

export default Item;

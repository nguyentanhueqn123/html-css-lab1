import React from "react";
import ava from "./img/meow.png";

function Profile() {
	return (
		<section id="profile">
			<h1>Profile</h1>
			<h4>I'm a student</h4>
			<div className="profile-content">
				<div className="profile-content-about">
					<h3>About me</h3>
					<p>I am a lovely cat. I have passion in IT and I want to become data analyst</p>
				</div>
				<div className="profile-content-img">
					<img src={ava} alt="meow" />
				</div>
				<div className="profile-content-detail">
					<h3>Details</h3>
					<h5>Name:</h5>
					<p>Tran Van Boss</p>
					<h5>Age:</h5>
					<p>5 years</p>
					<h5>Location:</h5>
					<p>UIT, VNU-HCM</p>
				</div>
			</div>
		</section>
	);
}

export default Profile;

import React from "react";
import Image from "react-image-resizer";
import { Link } from "react-router-dom";
class Logout extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light float-top">
				<div className="container">
					<div className="image">
						<img
							src={require("../logo.jpg")}
							width="100"
							height="70"
						/>
					</div>
					<div
						className="collapse navbar-collapse"
						id="navbarTogglerDemo02"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link" to={"/sign-in"}>
									<b>Logout</b>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Logout;

import React from "react";

function Navigation() {
	return (
		<div>
			<div className="header-top">
				<h1 className="header-name">Raymond Cerney</h1>
				<nav className="nav-bar">
					<ul>
						<li>
							<a href="#about">About Me</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
						<li>
							<a href="https://docs.google.com/document/d/1I1Zi0uTtTMnbilVaygNvS-rz9wzLZkGv8XOiGWnNiyQ/edit?usp=sharing">
								Resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navigation;

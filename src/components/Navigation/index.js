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
							<a href="../../assets/resume/Web Development Resume.docx" download="Web Development Resume.docx" target="_blank">
								Download Resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navigation;

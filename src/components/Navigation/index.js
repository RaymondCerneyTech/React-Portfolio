import React from "react";

function Navigation() {
	return (
		<div>
			<nav>
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
	);
}

export default Navigation
;

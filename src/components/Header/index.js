import React from "react";

function Header() {
	return (
		<header class="header-content">
			<div class="header-top">
				<h1 class="header-name">Raymond Cerney</h1>
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
							<a href="./assets/resume/Web Development Resume.docx" download="Web Development Resume.docx" target="_blank">
								Download Resume
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="header-bottom">
				<div class="bottom-head header-two">
					<div class="h-2-text">Master</div>
				</div>
				<div class="bottom-head header-three">
					<div class="h-3-text">Mentor</div>
				</div>
				<div class="bottom-head header-four">
					<div class="h-4-text"></div>Unify
				</div>
			</div>
		</header>
	);
}

export default Header;

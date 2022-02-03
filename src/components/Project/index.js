import React from "react";

function Body() {
	return (
		<div class="body">
			<div class="new-section">
				<div class="title" id="about">
					About
				</div>
				<div class="about-info">
					Welcome! I'm Ray, an aspiring full stack developer and software engineer.
					<br />
					<br /> I have a bachelor's in Computer Science and will be completing a full stack web development bootcamp in February; both from The University of Minnesota.
					<br />
					<br /> I was a manual software tester for nearly 3 years at Lifetouch Photography, testing both field-facing and finance department web apps.
					<br /> When companies started going remote due to covid, my employer laid off all of their manual testers, which was the perfect reason for me to continue my education.
					<br />
					<br /> The satisfaction received by engineering and developing automated solutions to people's problems is the reason I'm seeking a career in computer science.
				</div>
			</div>

			<div class="new-section">
				<div class="title" id="projects">
					Projects
				</div>

				<div class="content">
					<a title="main-project-title" class="project-link" href="https://ahmed-sajjad111.github.io/Munchies-and-Movies/">
						<img src=".././assets/images/Movies-and-Munchies-700.png" alt="Movies and Munchies"></img>
					</a>

					<a title="project-two-title" class="project-link" href="https://cbc-my-book.herokuapp.com/">
						<img class="secondary-projects" src=".././assets/images/MyBook.png" alt="MyBook Site"></img>
					</a>

					<a title="project-three-title" class="project-link" href="https://guarded-anchorage-60502.herokuapp.com/login">
						<img class="secondary-projects" src=".././assets/images/Project-Three.png" alt="Project Three"></img>
					</a>

					<a title="project-four-title" class="project-link" href="https://raymondcerneytech.github.io/portfolio-raymond-cerney/">
						<img class="secondary-projects" src=".././assets/images/portfolio-picture.PNG" alt="Project Four"></img>
					</a>

					<a title="project-five-title" class="project-link" href="">
						<img class="secondary-projects" src=".././assets/images/Project-Five.png" alt="Project Five"></img>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Body;

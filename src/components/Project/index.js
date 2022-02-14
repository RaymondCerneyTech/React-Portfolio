import React from "react";
import myBook from "../../assets/images/book/MyBook.png";
import munchiesAndMovies from "../../assets/images/movies/Movies-and-Munchies-700.png";
import portfolio from "../../assets/images/portfolio/portfolio-picture.png";
import fullStack from "../../assets/images/stack/Full-Stack.png";
import jsQuiz from "../../assets/images/quiz/jsQuiz.png";

function Body() {
	return (
		<div className="body">
			<div className="new-section">
				<div className="title" id="about">
					About
				</div>
				<div className="about-info">
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

			<div className="new-section">
				<div className="title" id="projects">
					Projects
				</div>

				<div className="content">
					<a title="Munchies And Movies" className="project-link" href="https://raymondcerneytech.github.io/Munchies-and-Movies/">
						<img src={munchiesAndMovies} alt="Movies and Munchies"></img>
					</a>

					<div className="other-projects">
						<a title="MyBook" className="project-link" href="https://cbc-my-book.herokuapp.com/">
							<img className="secondary-projects img1" src={myBook} alt="MyBook Site"></img>
						</a>

						<a title="Full Stack Exercise Track" className="project-link" href="https://guarded-anchorage-60502.herokuapp.com/login">
							<img className="secondary-projects img2 right-pic" src={fullStack} alt="Project Three"></img>
						</a>
					</div>
					<div className="other-projects">
						<a title="Portfolio" className="project-link" href="https://raymondcerneytech.github.io/portfolio-raymond-cerney/">
							<img className="secondary-projects img3" src={portfolio} alt="portfolio"></img>
						</a>

						<a title="JavaScript Quiz Game" className="project-link" href="https://raymondcerneytech.github.io/javascript-quiz-game/">
							<img className="secondary-projects img4 right-pic" src={jsQuiz} alt="JavaScript Quiz"></img>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Body;

import NavBar from "../common/navBar";
import "./styles/projectDetail.css"
const ProjectDetails2 = () => {
	const images = [
		"https://i.ibb.co.com/6R5rTWTf/Screenshot-2025-05-01-163052.png",
		"https://i.ibb.co.com/Z1vZ5smS/Screenshot-2025-05-01-163155.png",
		"https://i.ibb.co.com/jvVr3LPT/Screenshot-2025-05-01-163238.png",
		"https://i.ibb.co.com/FqskFJ2f/Screenshot-2025-05-01-163342.png",
	];

	return (
		<>
        <NavBar></NavBar>
        <div className="project-container">
            <div className="image-grid">
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`Project Screenshot ${index + 1}`}
						className="grid-image"
					/>
				))}
			</div>
			<h1 className="project-title">Express.js Project Showcase</h1>
			<p className="project-description">
				This project demonstrates how to build backend APIs using Express.js. It includes user authentication, database integration with MongoDB, and RESTful route handling.
			</p>

			

			<div className="button-group">
				<a
					href="https://github.com/sakibpro2003/Bi-CycleStoreClient"
					target="_blank"
					rel="noopener noreferrer"
					className="github-button"
				>
					Frontend Code
				</a>
				<a
					href="https://github.com/sakibpro2003/Bi-CycleStoreServer"
					target="_blank"
					rel="noopener noreferrer"
					className="github-button"
				
				>
					Backend Code
				</a>
			</div>
		</div>
        </>
	);
};

export default ProjectDetails2;

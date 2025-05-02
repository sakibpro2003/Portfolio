import NavBar from "../common/navBar";
import "./styles/projectDetail.css"
const ProjectDetails1 = () => {
	const images = [
		"https://i.ibb.co.com/WWD6RSMQ/Screenshot-2025-05-01-164037.png",
		"https://i.ibb.co.com/pBM3YFsW/Screenshot-2025-05-01-164004.png",
		"https://i.ibb.co.com/9H2dJtMK/Screenshot-2025-05-01-164200.png",
		"https://i.ibb.co.com/Q74fLz89/Screenshot-2025-05-01-164138.png",
	];

	return (
		<div>
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
		</div>
	);
};

export default ProjectDetails1;

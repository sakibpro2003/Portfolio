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
			<h1 className="project-title">MediMart — Full-Stack E-Commerce Web App</h1>
			<p className="project-description">
	MediMart 💊 is a full-stack online medicine e-commerce application built with modern web technologies. It provides a seamless experience for users to browse, search, and purchase medicines with secure authentication and smooth checkout via ShurjoPay. The platform includes both user and admin dashboards, enabling customers to track orders while allowing admins to manage inventory, orders, and users. The backend is built using Node.js, Express.js, MongoDB, and JWT, while the frontend uses Next.js 15.1.1 with TypeScript, Tailwind CSS, and NextAuth.js for secure login and session management.
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

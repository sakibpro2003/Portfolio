import NavBar from "../common/navBar";
import "./styles/projectDetail.css";

const ProjectDetails1 = () => {
	const images = [
		"https://i.ibb.co.com/WWD6RSMQ/Screenshot-2025-05-01-164037.png",
		"https://i.ibb.co.com/pBM3YFsW/Screenshot-2025-05-01-164004.png",
		"https://i.ibb.co.com/9H2dJtMK/Screenshot-2025-05-01-164200.png",
		"https://i.ibb.co.com/Q74fLz89/Screenshot-2025-05-01-164138.png",
	];

	return (
		<div>
			<NavBar />
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
				<h1 className="project-title">Bi-Cycle Store — Full-Stack E-Commerce Web App</h1>
				<p className="project-description">
					<strong>Bi-Cycle Store</strong> is a fully functional, full-stack e-commerce web application built to provide a seamless online shopping experience for bicycles. It features both user and admin roles, enabling complete control over product and order management with secure payment integration.
					<br /><br />
					<strong>👥 Role-Based Features:</strong><br />
					- <strong>User:</strong> Browse products, sort/filter, view details, add to cart, place/cancel orders, track orders.<br />
					- <strong>Admin:</strong> Add/edit/delete products, manage users (block/unblock), update order statuses.
					<br /><br />
					<strong>🛍️ Frontend Highlights:</strong><br />
					- React.js + TypeScript<br />
					- Tailwind CSS (DaisyUI & ShadCN)<br />
					- Redux Toolkit + RTK Query<br />
					- React Hook Form & Zod<br />
					- Responsive UI for all devices
					<br /><br />
					<strong>🔐 Backend Highlights:</strong><br />
					- Node.js + Express<br />
					- MongoDB with Mongoose<br />
					- JWT Auth with secure password hashing<br />
					- RESTful APIs with role-based protection<br />
					- Stripe & SSLCommerz payment integration<br />
					- Pagination, error handling, validation
					<br /><br />
					<strong>💳 Payments:</strong><br />
					Secure checkout experience using Stripe or SSLCommerz, with automatic stock and order status updates after payment.
					<br /><br />
					<strong>🌐 Tech Stack:</strong><br />
					Frontend: React.js (TypeScript), Redux Toolkit, Tailwind CSS, Axios<br />
					Backend: Node.js, Express, MongoDB, JWT, bcrypt<br />
					Deployment: Vercel & cloud platforms
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

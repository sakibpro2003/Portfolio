// src/components/projects/ProjectCard.jsx
import "./styles/projectCardstyle.css";

const ProjectCard = ({ image, title, description, githubLink, detailsLink }) => {
	return (
		<div className="project-card animated-fade-in-up">
			<div className="project-card-image-wrapper">
				<img src={image} alt={title} className="project-card-image" />
			</div>
			<div className="project-card-content">
				<h3 className="project-card-title">{title}</h3>
				<p className="project-card-description">{description}</p>
				<div className="project-card-buttons">
					<a href={githubLink} className="project-card-button details-button" target="_blank" rel="noopener noreferrer">
						Live Preview
					</a>
					<a href={detailsLink} className="project-card-button details-button">
						Details
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

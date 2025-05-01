import './styles/projectCardstyle.css'

const ProjectCard = ({ image, title, description, githubLink, detailsLink }) => {
  return (
    <div className="project-card">
      
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-buttons">
          <a href={githubLink} className="project-card-button github-button">
            GitHub
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

import React from "react";
import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faInstagram,
	faFacebook,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/homepage.css";
import ProjectCard from "../components/projects/projectCard";
import Skills from "../components/skills/skills";
import Footer from "../components/common/footer";

const Homepage = () => {

	const currentSEO = SEO.find((item) => item.page === "home");



	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<NavBar active="home" />
			<div className="page-content">
				<div className="content-wrapper">

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.greet}{" "}
									<span className="wave ">👋🏻</span>
								</div>
								<div className="title homepage-title wave"></div>
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>
								<div className="designition">
									{INFO.homepage.subtitle}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="103kb.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.facebook}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFacebook}
									className="homepage-social-icon"
								/>
							</a>
							
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

							<h3 className="featured-title">Featured Project</h3>
						<div className="homepage-projects">
							<ProjectCard
								image="https://i.ibb.co.com/ycfWy7G2/Screenshot-2025-05-01-170431.png"
								title="Bi-Cycle Store"
								description="An online shop for buying different brand bi-cycles"
								githubLink="https://bi-cycle-store-client-red.vercel.app/"
								detailsLink="https://yourwebsite.com/project1"
							/>

							<ProjectCard
								image="https://i.ibb.co.com/spVR8SHL/Screenshot-2025-04-05-011701.png"
								title="MediMart"
								description="Online shop for buying medicine from anywhere"
								githubLink="https://medi-mart-client-umber.vercel.app/"
								detailsLink="https://yourwebsite.com/project1"
							/>
						</div>



						<div className="homepage-works">
							<Works />
						</div>

						<div>
							<Skills></Skills>
						</div>
					</div>
				</div>
			</div>
				{/* <Contact></Contact> */}
				<Footer></Footer>
		</React.Fragment>
	);
};

export default Homepage;

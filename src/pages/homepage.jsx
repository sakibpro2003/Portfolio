import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// import bicycle from "../../public/biCycle.png"

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import ProjectCard from "../components/projects/projectCard";
import Footer from "../components/common/footer";

const Homepage = () => {
	// const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		// let scroll = Math.round(window.pageYOffset, 2);

	// 		// let newLogoSize = 80 - (scroll * 4) / 10;

	// 		// if (newLogoSize < oldLogoSize) {
	// 		// 	if (newLogoSize > 40) {
	// 		// 		setLogoSize(newLogoSize);
	// 		// 		setOldLogoSize(newLogoSize);
	// 		// 		setStayLogo(false);
	// 		// 	} else {
	// 		// 		setStayLogo(true);
	// 		// 	}
	// 		// } else {
	// 		// 	setLogoSize(newLogoSize);
	// 		// 	setStayLogo(false);
	// 		// }
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, [logoSize, oldLogoSize]);

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
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
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

						{/* TODO: add article ltter */}

						{/* <div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div> */}

						{/* <div className="page-footer">
							<Footer />
						</div> */}

						<div className="homepage-works">
							<Works />
						</div>
					</div>
				</div>
			</div>
				<Footer></Footer>
		</React.Fragment>
	);
};

export default Homepage;

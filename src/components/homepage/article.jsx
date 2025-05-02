import React from "react";
import "./styles/article.css";

const DivingIntoExpress = () => {
	return (
		<React.Fragment>
			<style>{`
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
			`}</style>

			<div className="article-wrapper">
				<div className="homepage-article-date">|&nbsp;&nbsp;&nbsp;27 April 2025</div>
				<div className="homepage-article-title">Diving into Express.js</div>
				<div className="homepage-article-description">
					Just Finished the Basics and Ready for Real-World Projects! From setting up servers to building APIs and handling middleware, Express makes backend development smooth and efficient...
				</div>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default DivingIntoExpress;

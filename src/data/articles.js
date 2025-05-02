import React from "react";

function article_1() {
	return {
		date: "27 April 2025",
		title: "Diving into Express.js",
		description:
			"Just Finished the Basics and Ready for Real-World Projects!From setting up servers to building APIs and handling middleware, Express makes....",
		keywords: ["Express js"],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}
const myArticles = [article_1];

export default myArticles;

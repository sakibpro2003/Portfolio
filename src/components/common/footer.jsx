import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";
import "./styles/footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-socials">
					<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href={INFO.socials.github} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</div>
				<div className="footer-text">
					© {new Date().getFullYear()} {INFO.main.name}. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;

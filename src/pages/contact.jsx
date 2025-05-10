import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	const formRef = useRef(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAIL_JS_SERVICE_ID, 
				process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, 
				formRef.current,
				process.env.REACT_APP_EMAIL_JS_PUBLIC_ID, 
				
			)
			.then(() => {
				toast.success("Message sent successfully!", { position: "top-right" });
				formRef.current.reset();
			})
			.catch((error) => {
				console.error(error.text);
				toast.error("Failed to send message. Please try again.", { position: "top-right" });
			})
			.finally(() => setLoading(false));
	};

	return (
		<>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="contact-wrapper">
					<h1 className="contact-heading">Let’s Talk!</h1>
					<p className="contact-description">
						Have a question, proposal, or just want to say hi? Fill out the form or
						connect with me via social media. I'll get back to you as soon as possible.
					</p>

					<div className="contact-main">
						<form ref={formRef} onSubmit={sendEmail} className="contact-form">
							<input
								type="text"
								name="from_name"
								placeholder="Your Name"
								required
							/>
							<input
								type="email"
								name="reply_to"
								placeholder="Your Email"
								required
							/>
							<textarea
								name="message"
								rows="6"
								placeholder="Your Message"
								required
							/>
							<button type="submit" disabled={loading}>
								{loading ? (
									<span className="spinner"></span>
								) : (
									"Send Message"
								)}
							</button>
						</form>

						<div className="contact-info">
							<h3>Reach Me At</h3>
							<p>Email: <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a></p>
							<h3>Follow Me</h3>
							<Socials />
						</div>
					</div>
				</div>

				<Footer />
			</div>

			<ToastContainer />
		</>
	);
};

export default Contact;

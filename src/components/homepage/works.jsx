import Card from "../common/card";
import { FaGraduationCap } from "react-icons/fa";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<h2 className="education-title">Education</h2>
			<Card
				icon={<FaGraduationCap />}
				// title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={"https://i.ibb.co.com/xq6ryn06/graduation-logo-removebg-preview.jpg"}
								alt="GraduationCap"
								className="work-image "
							/>
							<div className="work-title">Graduation (Final Year)</div>
							<div className="work-subtitle">
								Bangladesh Army University of Science and Technology, Saidpur
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://i.ibb.co.com/p6q0kH7f/360-F-158341076-1-UVk-U7-KFK3f7yi-Tcu-Jswv-Zsqx-QFPNv6-F.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">FullStack Development</div>
							<div className="work-subtitle">
								Programming Hero
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>
						<div className="work">
							<img
								src="https://i.ibb.co.com/p6q0kH7f/360-F-158341076-1-UVk-U7-KFK3f7yi-Tcu-Jswv-Zsqx-QFPNv6-F.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">FullStack Development</div>
							<div className="work-subtitle">
								Club
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>
						<div className="work">
							<img
								src="https://i.ibb.co.com/p6q0kH7f/360-F-158341076-1-UVk-U7-KFK3f7yi-Tcu-Jswv-Zsqx-QFPNv6-F.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">FullStack Development</div>
							<div className="work-subtitle">
								Club
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

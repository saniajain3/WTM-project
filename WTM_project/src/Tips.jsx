import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tips = () => {
	const tips = [
		"Stay hydrated to reduce bloating.",
		"Keep a heating pad handy to reduce menstrual cramps.",
		"Eat iron-rich foods to boost energy.",
		"Try light stretching exercises to alleviate pain.",
		"Take short walks to relieve fatigue.",
		"Listen to calming music or audiobooks to distract from discomfort.",
		"Eat leafy greens to replenish iron levels during heavy flow.",
		"Eat dark chocolate (70% cocoa or higher) to boost mood and relax muscles.",
		"Prioritize self-care by scheduling 'me-time' to rest and recharge",
		"Drink ginger tea to relieve nausea and bloating.",
		"Carry a period emergency kit with pads, tampons, or a menstrual cup.",
		"Use a menstrual tracker app to monitor symptoms and cycles.",
	];

	const [currentSlide, setCurrentSlide] = useState(0);
	const [timeRemaining, setTimeRemaining] = useState(3000);
	const autoplaySpeed = 3000;

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed,
		beforeChange: (oldIndex, newIndex) => {
			setCurrentSlide(newIndex);
			setTimeRemaining(autoplaySpeed);
		},
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeRemaining((prev) => (prev > 0 ? prev - 100 : 0)); // Reduce by 100ms
		}, 100);
		return () => clearInterval(timer);
	}, [currentSlide]);

	return (
		<div className="relative">
			<h1 className="text-2xl font-semibold mb-4 text-center text-[#590066]">
				Tips For Your Period
			</h1>
			<Slider {...settings}>
				{tips.map((tip, index) => (
					<div key={index}>
						<div className="p-4 text-center rounded-lg">{tip}</div>
					</div>
				))}
			</Slider>

			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/6 h-1 bg-gray-300">
				<div
					className="h-full bg-[#590066] transition-all duration-300"
					style={{
						width: `${
							((autoplaySpeed - timeRemaining) / autoplaySpeed) * 100 + 1.5
						}%`,
					}}
				></div>
			</div>
		</div>
	);
};

export default Tips;

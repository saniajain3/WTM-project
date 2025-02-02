import pastel from "/images/pastel.jpeg";

const SectionWrapper = ({ bgImage, children }) => (
	<div className="relative flex flex-col bg-white shadow-md w-fit py-8 px-5 rounded-lg">
		<div
			className="absolute inset-0 bg-cover bg-center z-0 rounded-xl"
			style={{
				backgroundImage: `url('${bgImage}')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		></div>
		<div className="absolute inset-0 backdrop-blur-[2px] bg-white/40 z-0 rounded-lg"></div>
		<div className="relative z-10">{children}</div>
	</div>
);

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 xl:px-40 2xl:px-80 py-8">
			<SectionWrapper bgImage={pastel}>
				{/* Introduction Section */}
				<section
					id="home"
					className="flex flex-col justify-center text-gray-800"
				>
					<h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold font-inter mb-3 text-center tracking-wide text-gray-800">
						Welcome to HerSpace🌸
					</h1>
					<p
						className="text-base xl:text-sm font-modelica text-center home-desc mb-2"
						style={{ marginTop: "-6px" }}
					>
						Empowering women at every stage of life
					</p>
					<div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-5">
						<p className="text-lg md:text-xl xl:text-2xl wotfard px-5 py-4">
							HerSpace is your personal hub, designed to support women through
							every phase of life. Whether you're a teen navigating puberty, a
							young adult balancing health and career, or a senior looking to
							stay active and connected, we've got you covered.
						</p>

						<h1 className="font-bold text-xl md:text-2xl text-center pt-5">
							What You'll Find Here:
						</h1>

						<ul className="py-4 text-base sm:text-lg md:text-xl wotfard space-y-3.5 pl-3">
							<li>
								<span className="mr-2">★</span>
								<strong>Period Tracker:</strong> Manage your cycles effortlessly
								with our easy-to-use period tracker.
							</li>
							<li>
								<span className="mr-2">★</span>
								<strong>Chatbot:</strong> Have questions? Our friendly chatbot
								is here to help 24/7.
							</li>
							<li>
								<span className="mr-2">★</span>
								<strong>Career Hub:</strong> Bridge skill gaps, explore career
								roadmaps, and achieve your professional dreams.
							</li>
							<li>
								<span className="mr-2">★</span>
								<strong>Age-specific Support:</strong> Tailored guidance for
								teens, young adults, middle-aged women, and seniors.
							</li>
						</ul>

						<p className="text-xl md:text-2xl font-[600] font-poppins pt-4">
							Why HerSpace?
						</p>
						<p className="text-lg md:text-xl wotfard tracking-wide py-3 text-center">
							Our mission is to empower women with knowledge, tools, and a
							supportive community to thrive in every aspect of life. Dive in
							and explore a space built for{" "}
							<strong className="text-pink-600">YOU</strong>.
						</p>
					</div>
				</section>
			</SectionWrapper>
		</div>
	);
}

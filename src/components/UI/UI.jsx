import { motion } from "framer-motion";
export const Section = (props) => {
	const { children } = props;
	const { styles } = props;
	const style = `h-screen w-screen p-8 max-w-screen mx-auto flex flex-col  `;
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.1, delay: 0.5 }}
			className={style + `${styles}`}
			id={props.id}>
			{children}
		</motion.section>
	);
};

export const UI = () => {
	return (
		<>
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</>
	);
};

const WelcomeSection = () => {
	return (
		<Section
			id='welcomeSection'
			styles={
				"welcomeSection items-center text-4xl text-green-400 font-bold justify-center text-shadow-lg shadow-black"
			}>
			<h1>Hello! My name is Temitope Moses James a.k.a Teejay</h1>
		</Section>
	);
};

const AboutSection = () => {
	return (
		<Section
			id='aboutSection'
			styles={
				"aboutSection items-center text-4xl text-white font-bold justify-center"
			}>
			<h1>About Me</h1>
		</Section>
	);
};

const ProjectsSection = () => {
	return (
		<Section
			id='projectsSection'
			styles={
				"items-center text-4xl text-white font-bold justify-center"
			}>
			<h1>Projects</h1>
		</Section>
	);
};

const ContactSection = () => {
	return (
		<Section
			id='contactSection'
			styles={
				"items-center text-4xl text-white font-bold justify-center"
			}>
			<h1>Contact</h1>
		</Section>
	);
};

export const Navigation = () => {
	return (
		<>
			<nav className='absolute flex flex-row top-0 left-0  h-screen  w-100 p-8 max-w-screen mx-auto z-20 '>
				<img
					className='fixed w-100 h-20 self-start z-20'
					src='/images/logo-transparent-svg.svg'
					alt='logo'
				/>

				<ul className='self-center flex flex-col   h-20 text-2xl text-orange-600  '>
					<li className='mx-4 mb-20 -rotate-90 '>
						<a href='#welcomeSection'>Welcome</a>
					</li>
					<li className='mx-4 mb-20 -rotate-90 '>
						<a href='#aboutSection'>About</a>
					</li>
					<li className='mx-4 mb-20 -rotate-90 '>
						<a href='#projectsSection'>Projects</a>
					</li>
					<li className='mx-4 mb-8 -rotate-90 '>
						<a href='#contactSection'>Contact</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

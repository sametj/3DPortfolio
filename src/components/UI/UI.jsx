import { motion } from "framer-motion";
const Section = (props) => {
	const { children } = props;
	const { styles } = props;
	const style = `h-screen w-screen p-8 max-w-screen 2xl mx-auto flex flex-col  `;
	return (
		<motion.section
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 20 }}
			transition={{ duration: 0.1, delay: 0.5 }}
			className={style + `${styles}`}>
			{children}
		</motion.section>
	);
};

export const UI = () => {
	return (
		<>
			<LandingSection />
		</>
	);
};

const LandingSection = () => {
	return (
		<Section
			styles={
				"items-center text-4xl text-purple-400 font-bold justify-center"
			}>
			<h1>Welcome To My Portfolio</h1>
		</Section>
	);
};

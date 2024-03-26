import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Divider } from "@mui/material";
import { Stack } from "@mui/material";
import { CardMedia } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import Button from "@mui/material/Button";

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
			<Box
				height={200}
				width={550}
				my={4}
				display='flex'
				alignItems='center'
				gap={4}
				p={2}
				sx={{
					border: "2px solid white",
					padding: "8px",
					marginBottom: "600px",
					marginRight: "1000px",
					borderRadius: "30px",
					textAlign: "center",
					justifyContent: "center",
				}}>
				Hello, I'm Temitope James / TJ
			</Box>
		</Section>
	);
};

const AboutSection = () => {
	return (
		<Section id='aboutSection'>
			<Box
				my={4}
				display='flex'
				alignItems='center'
				p={4}
				sx={{
					border: "2px solid white",
					padding: "18px",
					marginBottom: "200px",
					marginLeft: "1500px",
					borderRadius: "30px",
					alignSelf: "end",
					backgroundColor: "rgba(1, 10, 255, 0.1)",
					textAlign: "center",
					justifyContent: "center",
					height: "100%",
					width: "40%",
					boxShadow: "4px 8px 4px white",
				}}>
				<Typography
					variant='caption'
					mt={2}
					sx={{
						fontSize: "1.5rem",
						color: "white",
						textShadow: "2px 2px 2px black",
						textAlign: "center",
					}}>
					Hello, My name is Temitope James / TJ, I am a current
					student of computer systems technology at NYCCT with an
					expected completion of my bachelor’s program in June 2024, I
					have interned as a Database analyst for NYC Department of
					Social Services. I currently volunteer as a teacher for
					CodeNation, a non-profit organization that provides web
					development courses to minority students. Throughout my
					educational journey, I have acquired the skill of learning.
					I am excited to be here today to highlight my skills and
					provide more details about my candidacy for the Solution
					Analyst - Software Engineer position at deloitte.
				</Typography>
			</Box>
		</Section>
	);
};

const Project = (props) => {
	return (
		<>
			<Card
				sx={{
					display: "flex",
					minWidth: 600,
					maxHeight: 300,
					backgroundColor: "grey",
					padding: 2,
					borderRadius: 4,
					boxShadow: 4,
					margin: 2,
				}}>
				<CardMedia
					component='img'
					sx={{
						width: 600,
						height: 270,
						borderRadius: 4,
						boxShadow: 4,
					}}
					image={props.image}
					alt={props.title}
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<CardContent
						sx={{
							flex: "1 0 auto",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							alignSelf: "center",
							justifySelf: "center",
						}}>
						<Typography
							variant='h5'
							component='div'>
							{props.title}
						</Typography>
						<Typography
							variant='body2'
							component='p'>
							{props.description}
						</Typography>
					</CardContent>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							padding: 2,
							gap: 2,
						}}>
						<Button
							variant='contained'
							href={props.previewLink}
							sx={{ display: "flex", width: 120, gap: 1 }}>
							<PreviewIcon sx={{ fontSize: "20px" }} />
							Preview
						</Button>

						<Button
							variant='contained'
							href={props.githubLink}
							sx={{ display: "flex", width: 120, gap: 1 }}>
							<GitHubIcon sx={{ fontSize: "20px" }} />
							GitHub
						</Button>
					</Box>
				</Box>
				<Divider
					orientation='horizontal'
					flexItem
				/>
			</Card>
		</>
	);
};
const ProjectsSection = () => {
	return (
		<Section id='projectsSection'>
			<Box
				my={4}
				display='flex'
				p={4}
				sx={{
					flexDirection: "row",
					border: "2px solid white",
					padding: "18px",
					marginBottom: "200px",
					marginLeft: "1500px",
					borderRadius: "30px",
					alignSelf: "end",
					backgroundColor: "rgba(1, 10, 255, 0.1)",
					textAlign: "center",
					justifyContent: "center",
					alignItems: "center",
					gap: 4,
					height: "100%",
					width: "35%",
					boxShadow: "2px 2px 4px white",
					flexWrap: "wrap",
					overflow: "scroll",
				}}>
				<Project
					title='ActionAtlas: A Full Stack todolist'
					description='Description 1'
					image='/images/actionAtlas.png'
					previewLink='https://actionatlas.netlify.app/'
					githubLink='https://github.com/sametj/ActionAtlas'
				/>
			</Box>
		</Section>
	);
};

const ContactSection = () => {
	return (
		<Section
			id='contactSection'
			styles={
				"items-center text-4xl text-white font-bold justify-center  w-2/3 "
			}>
			<h1>Contact</h1>
		</Section>
	);
};

export const Navigation = () => {
	return (
		<>
			<nav className='absolute flex flex-row top-0 left-0  h-screen  w-100 p-8 max-w-screen mx-auto z-20 touch-none  '>
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

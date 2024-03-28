import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Divider } from "@mui/material";
import { Stack } from "@mui/material";
import { CardMedia } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import Container from "@mui/material/Container";
import { useContext, useState } from "react";
import { VideoContext } from "../../App";

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
				display='flex'
				alignItems='center'
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
	const [header, setHeader] = useState("Intro");

	const introContent = `I am a Full Stack Developer with a passion for creating web applications that are both visually appealing and functional. I have experience working with HTML, 
	CSS, JavaScript, Node, Express, and MongoDB. I am currently learning React to further my skills in front-end development.`;
	const [displayContent, setdisplayContent] = useState(introContent);

	const EducationContent = `I am currently a student at New York City College of Technology, pursuing a Bachelor's degree in Computer Science. I have taken courses in Data Structures,`;

	const AboutSectionButton = (props) => {
		return (
			<Button
				onClick={() => {
					setHeader(props.text);
					setdisplayContent(props.content);
				}}
				sx={{
					backgroundColor: "#111827",
					color: "white",
					fontSize: "1.5rem",
					fontWeight: "bold",
					boxShadow: "2px 18px 20px black",
					borderRadius: "18px",
					border: "2px solid white",
					gap: 1,
					":hover": {
						backgroundColor: "#a78bfa",
						color: "black",
					},
				}}>
				{props.text}
			</Button>
		);
	};

	const ContentBox = (props) => {
		return (
			<Box
				{...props}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#111827",
					color: "white",
					fontSize: "1.5rem",
					fontWeight: "bold",
					padding: "8px",
					borderRadius: "10px",
					border: "2px solid white",
					gap: 1,
				}}>
				{props.content || props.text}
			</Box>
		);
	};

	return (
		<Section id='aboutSection'>
			<Box
				sx={{
					display: "flex",
					border: "2px solid white",
					padding: "4px",
					marginBottom: "200px",
					borderRadius: "30px",
					alignSelf: "end",
					textAlign: "center",
					alignItems: "start",
					padding: "8px",
					height: "60%",
					width: "60%",
					gap: 1,
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						padding: "18px",
						borderRadius: "10px",
						textAlign: "center",
						width: "30%",
						backdropFilter: "blur(8px)",
						gap: 1,
					}}>
					<AboutSectionButton
						text='Intro'
						content={introContent}
					/>
					<AboutSectionButton
						text='Education'
						content={EducationContent}
					/>
					<AboutSectionButton text='Experience' />
					<AboutSectionButton text='Skills' />
				</Box>
				<Box
					display='flex'
					sx={{
						flexDirection: "column",
						border: "2px solid white",
						padding: "18px",
						borderRadius: "30px",
						backgroundColor: "rgba(1, 10, 255, 0.1)",
						textAlign: "center",
						width: "70%",
						justifySelf: "center",
						alignSelf: "center",
						maxHeight: "500px",
						height: "100%",
						boxShadow: "2px 2px 18px black",
						backdropFilter: "blur(8px)",
						gap: 8,
					}}>
					<ContentBox content={header} />
					<ContentBox content={displayContent} />
				</Box>
			</Box>
		</Section>
	);
};

const Project = (props) => {
	const setVideo = useContext(VideoContext);

	return (
		<>
			<Card
				onClick={() => setVideo(props.video.toString())}
				sx={{
					display: "flex",
					minWidth: 600,
					maxHeight: 360,
					backgroundColor: "#FFBB75",
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
						<Typography variant='h5'>{props.title}</Typography>
						<Typography
							variant='h5'
							sx={{
								textDecoration: "underline",
								marginTop: 2,
							}}>
							Tech Stack
						</Typography>
						<Typography
							variant='body2'
							component='span'
							sx={{ marginTop: 1, fontSize: 25 }}>
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
const ProjectsSection = (props) => {
	return (
		<Section
			id='projectsSection'
			className='flex'>
			<Box
				display='flex'
				sx={{
					flexDirection: "row",
					border: "2px solid white",
					padding: "4px",
					marginBottom: "200px",
					marginLeft: "1500px",
					borderRadius: "30px",
					alignSelf: "end",
					backgroundColor: "rgba(1, 10, 255, 0.1)",
					textAlign: "center",
					justifyContent: "center",
					alignItems: "center",
					padding: "8px",
					height: "60%",
					width: "40%",
					boxShadow: "2px 2px 18px black",
					flexWrap: "wrap",
					overflow: "scroll",
					overflowX: "hidden",
					backdropFilter: "blur(8px)",
				}}>
				<Project
					title='ActionAtlas: A Full Stack todolist'
					description='HTML | CSS | JavaScript | Node | Express | MongoDB'
					image='/images/actionAtlas.png'
					previewLink='https://action-atlas.vercel.app'
					githubLink='https://github.com/sametj/ActionAtlas'
					video='/videos/test2.mp4'
				/>

				<Project
					title='ActionAtlas: A Full Stack todolist'
					description='HTML | CSS | JavaScript | Node | Express | MongoDB'
					image='/images/actionAtlas.png'
					previewLink='https://action-atlas.vercel.app'
					video='/videos/test1.mp4'
				/>

				<Project
					title='ActionAtlas: A Full Stack todolist'
					description='HTML | CSS | JavaScript | Node | Express | MongoDB'
					image='/images/actionAtlas.png'
					previewLink='https://action-atlas.vercel.app'
					video='/videos/test2.mp4'
				/>
			</Box>
		</Section>
	);
};

const ContactSection = () => {
	const ContactButton = (props) => {
		const { text, icon, link } = props;
		return (
			<Button
				{...props}
				onClick={() => window.open(link)}
				sx={{
					width: "65%",
					height: "100px",
					backgroundColor: "#111827",
					color: "white",
					fontSize: "1.5rem",
					fontWeight: "bold",
					boxShadow: "2px 18px 20px black",
					borderRadius: "35px",
					border: "2px solid white",
					gap: 1,
					":hover": {
						backgroundColor: "#a78bfa",
						color: "black",
					},
				}}>
				{icon}
				{text}
			</Button>
		);
	};
	return (
		<Section id='contactSection'>
			<Box
				display='flex'
				sx={{
					border: "2px solid white",
					marginBottom: "200px",
					borderRadius: "30px",
					backgroundColor: "rgba(1, 10, 255, 0.1)",
					backdropFilter: "blur(8px)",
					textAlign: "center",
					justifyContent: "center",
					height: "fit-content",
					width: "600px",
					boxShadow: "2px 2px 41px black",
					justifySelf: "center",
					alignSelf: "center",
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						height: "100%",
						gap: 4,
						padding: 8,
					}}>
					<ContactButton
						icon={<i className='fa-brands fa-twitter'></i>}
						text={"Twitter"}
						link={"https://twitter.com/Same_TeeJay"}
					/>
					<ContactButton
						icon={<i className='fa-brands fa-github'></i>}
						text={"GitHub"}
						link={" https://github.com/sametj"}
					/>
					<ContactButton
						icon={<i className='fa-brands fa-linkedin'></i>}
						text={"LinkedIn"}
						link={"https://www.linkedin.com/in/temitope-james/"}
					/>
					<ContactButton
						icon={<EmailIcon />}
						text={"Email"}
						link={
							"mailto:mailto:temitope.james@mail.citytech.cuny.edu"
						}
					/>
				</Box>
			</Box>
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

import { Box, Heading, Text } from "@chakra-ui/react";

const AboutMe = () => {
	return (
		<>
			<Heading as="h1">
				Hi, I'm Sudais Moorad
			</Heading>
			<Box>
				<Text my={4}>
					I am a student at Vassar College, NY where I'm majoring in Math and
					Computer Science with a minor in Quantitative Economics.
				</Text>
				<Text my={4}>
					This is my space on the internet where I share my thoughts
					and projects.
				</Text>
			</Box>
		</>
	);
};

export default AboutMe;

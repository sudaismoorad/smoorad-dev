import { Heading, Text } from "@chakra-ui/react";

const BlogHeader = () => {
	return (
		<>
			<Heading mb={4} as="h1">
				My Blog
			</Heading>
			<Text my={4}>
				Search doesn't work at the moment, will work on it soon.
			</Text>
		</>
	);
};

export default BlogHeader;

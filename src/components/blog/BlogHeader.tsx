import { Heading, Text } from "@chakra-ui/react";

const BlogHeader = () => {
	return (
		<>
			<Heading my={4} as="h1">
				My Blog
			</Heading>
			<Text my={4}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus amet
				eos voluptates dignissimos veniam consequuntur ab vel rerum dolorem,
				commodi adipisci doloremque fugit repellendus esse quis minima
				exercitationem? Officia, eos.
			</Text>
		</>
	);
};

export default BlogHeader;

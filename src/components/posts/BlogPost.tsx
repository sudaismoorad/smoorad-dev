import { Box, Heading, Flex, Text, Tag, useColorMode } from "@chakra-ui/react";

const BlogPost = () => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";

	return (
		<Box
			rounded="md"
			overflow="hidden"
			border="1px"
			mb={4}
			p={4}
			backgroundColor={isDark ? "#2d3748" : ""}
			borderColor={isDark ? "#4a5568" : "#e2e8f0"}
		>
			<Heading as="h3" isTruncated size="md">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
				dolores, facere libero tenetur praesentium dignissimos quibusdam, unde
				quam autem eius mollitia obcaecati consectetur quo suscipit commodi
				delectus vero dolore tempore.
			</Heading>
			<Flex mt={1} alignItems="center">
				<Text mr={2}>24 September 2020</Text>
				<Tag mr={0.5} size="sm">
					Latin
				</Tag>
				<Tag mr={0.5} size="sm">
					Text
				</Tag>
			</Flex>
			<Text mt={4} isTruncated>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates
				aliquam, porro quod unde officiis saepe! A voluptas est ipsam velit
				ducimus quibusdam eveniet voluptate perspiciatis, error ab consectetur
				recusandae.
			</Text>
		</Box>
	);
};

export default BlogPost;

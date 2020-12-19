import { Box, Heading, Flex, Text, Tag, Link, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { getDate } from "../../lib/api";
import { Blog } from "../../types/blog";
interface BlogPostProps {
	post: Blog;
}

const BlogPost = ({ post, ...props }: BlogPostProps) => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";

	if (!post) return null;

	return (
		<Box
			rounded="md"
			overflow="hidden"
			border="1px"
			mb={4}
			p={4}
			backgroundColor={isDark ? "#2d3748" : ""}
			borderColor={isDark ? "#4a5568" : "#e2e8f0"}
			{...props}
		>
			<NextLink href={`/blog/${post.slug}`}>
				<Link>
					<Heading as="h3" isTruncated size="md">
						{post.title}
					</Heading>
				</Link>
			</NextLink>
			<Flex mt={1} alignItems="center">
				<Text mr={2}>
					{getDate(post.date)}
				</Text>
				{
					post.tags.map((tag) => {
						return (
						<Tag key={post.slug} mr={0.5} size="sm">
							{tag}
						</Tag>
						)
					})
				}
			</Flex>
			<Text mt={4} isTruncated>
				{post.description}
			</Text>
		</Box>
	);
};

export default BlogPost;

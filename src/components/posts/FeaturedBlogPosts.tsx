import { Heading, Link } from "@chakra-ui/react";
import BlogPost from "./BlogPost";
import NextLink from "next/link";

const FeaturedBlogPosts = () => {
	return (
		<>
			<Heading as="h2" mb={8}>
				Featured Blog Posts
			</Heading>
			<BlogPost />
			<BlogPost />
			<BlogPost />
			<NextLink href="/blog">
				<Link alignSelf="center">
					All Posts
				</Link>
			</NextLink>
		</>
	);
};

export default FeaturedBlogPosts;

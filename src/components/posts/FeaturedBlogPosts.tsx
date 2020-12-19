import { Heading, Link } from "@chakra-ui/react";
import BlogPost from "./BlogPost";
import NextLink from "next/link";

const FeaturedBlogPosts = ({posts}) => {
	return (
		<>
			<Heading as="h2" mb={8}>
				Featured Blog Posts
			</Heading>
			{posts.map((post) => <BlogPost key={post.slug} post={post} />) }
			<NextLink href="/blog">
				<Link alignSelf="center">
					All Posts
				</Link>
			</NextLink>
		</>
	);
};

export default FeaturedBlogPosts;

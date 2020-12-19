import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import BlogHeader from "../../components/blog/BlogHeader";
import SearchBar from "../../components/blog/SearchBar";
import Container from "../../components/Container";
import { BlockMapType } from "react-notion";
import { getNotionPageBlocks, getNotionTable } from "../../lib/api";
import BlogPost from "../../components/posts/BlogPost";
import { Blog } from "../../types/blog";
import { GetStaticProps } from "next";

interface BlogProps {
	posts: Blog[];
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const posts = await getNotionTable<Blog>(process.env.NOTION_BLOG_TABLE);

	const filteredPosts = posts
		.filter((post) => post.display === "yes")
		.sort((a, b) => Number(new Date(b.date)) - Number (new Date(a.date)));

	return {
		props: {
			posts: filteredPosts,
		},
		revalidate: 10,
	};
}

export default ({ posts }: BlogProps) => {
	return (
	<>
		<Container >
			<Navbar />
			<Main>
				<BlogHeader />
				<SearchBar />
				{posts.map((post) => <BlogPost post={post} />)}
			</Main>
		</ Container>	
	</>
	)
}

import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import BlogHeader from "../../components/blog/BlogHeader";
import SearchBar from "../../components/blog/SearchBar";
import Container from "../../components/Container";

const Blog = () => {
	return (
		<Container height="100vh">
			<Navbar />
			<Main>
				<BlogHeader />
				<SearchBar />
			</Main>
		</ Container>
	);
};

export default Blog;

import Container from '../components/Container'
import Projects from "../components/Projects"
import AboutMe from "../components/AboutMe"
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import FeaturedBlogPosts from "../components/posts/FeaturedBlogPosts"
import { GetStaticProps } from 'next'
import { getNotionTable } from '../lib/api'
import { Blog } from '../types/blog'

export const getStaticProps: GetStaticProps = async () => {

  const posts = await getNotionTable<Blog>(process.env.NOTION_BLOG_TABLE);

  const filteredPosts = posts
    .filter((post) => post.featured === "yes" && post.display === "yes")
		.sort((a, b) => Number(new Date(b.date)) - Number (new Date(a.date)));

  return {
    props: {
      posts: filteredPosts,
    },
  }
}

const Index = ({ posts }) => (
  <Container >
      <Navbar />
      <Main>
        <AboutMe />
        <FeaturedBlogPosts posts={posts} />
        <Projects />
      </Main>
  </Container>
)

export default Index

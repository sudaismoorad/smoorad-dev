import Container from '../components/Container'
import Projects from "../components/Projects"
import AboutMe from "../components/AboutMe"
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import FeaturedBlogPosts from "../components/posts/FeaturedBlogPosts"

const Index = () => (
  <Container >
      <Navbar />
      <Main>
        <AboutMe />
        <FeaturedBlogPosts />
        <Projects />
      </Main>
  </Container>
)

export default Index

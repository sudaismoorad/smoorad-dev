import { BlockMapType, NotionRenderer } from "react-notion";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Container from "../../components/Container";
import Head from "next/head"
import { Heading } from "@chakra-ui/react"
import { getNotionPageBlocks, getNotionTable } from "../../lib/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { Blog } from "../../types/blog";
import "prismjs/themes/prism-tomorrow.css";

interface BlogPostProps {
    blocks: BlockMapType
    post: Blog
}

export const getStaticPaths: GetStaticPaths = async() => {
    const table = await getNotionTable<Blog>(process.env.NOTION_BLOG_TABLE);

    return {
        paths: table
            .filter((row) => row.display === "yes")
            .map((row) => `/blog/${row.slug}`),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<BlogPostProps, { slug: string }> = async ({params}) => {
    const slug = params?.slug;

    if (!slug) throw Error("No slug given")
    const table = await getNotionTable<Blog>(process.env.NOTION_BLOG_TABLE);

    const post = table.find((t) => t.slug === slug);
  
    if (!post || post.display != "yes") throw Error(`Failed to find post for slug: ${slug}`);

    const blocks = await getNotionPageBlocks(post.post[0]);
  
    return {
      props: {
        post,
        blocks,
      },
      revalidate: 10,
    };
}

const BlogPost: React.FC<BlogPostProps> = ({post, blocks}) => {
    if (!post) return null;

	return (
        <>
            <Head>
                <title> { post.title } </title>
            </Head>
            <Container>
                <Navbar />
                <Main>
                    <Heading as="h2">
                        {post.title}
                    </Heading>
                    <article>
                        <NotionRenderer blockMap={blocks} />
                    </article>
                </Main>
            </Container>
        </>
	);
};

export default BlogPost;

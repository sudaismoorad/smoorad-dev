import { Flex, IconButton, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { FiGithub, FiTwitter, FiHome } from "react-icons/fi";
import useWindowSize from "../hooks/useWindowSize";

type NavbarProps = {
	sticky?: boolean;
};

const Navbar = (props: NavbarProps) => {
	const { width } = useWindowSize()
	return (
		<Stack
			as="nav"
			isInline
			w={"100%"}
			maxWidth={"796px"}
			mt={4}
			mr="auto"
			ml="auto"
			px={5}
			py={4}
			alignItems="center"
			justifyContent="space-between"
			flexWrap="wrap"
			zIndex={props?.sticky ? "1100" : ""}
		>
			<Flex alignItems="center">
				<Link href="/" py={2} px={3}>
					<IconButton
						bg="none"
						aria-label="Go back to the Home Page"
						icon={<FiHome />}
					/>
					</Link>
				{width < 375 
					? null : 
					<Link py={2} px={3} href="/#projects">
						Projects
					</Link>
				}
				{/* <NextLink href="/public/resume.pdf">
					<Link py={2} px={3}>
						Resume
					</Link>
				</NextLink> */}
				{
					width < 290 
					? null :
					<NextLink href="/blog">
						<Link py={2} px={3}>
							Blog
						</Link>
					</NextLink>
				}
			</Flex>
			<Flex alignItems="center">
				<Link
					type="button"
					aria-label="Follow me on Twitter"
					href="https://twitter.com/sudaismoorad"
					target="_blank"
					boxSize="40px"
				>
					<IconButton
						bg="none"
						aria-label="Follow me on Twitter"
						icon={<FiTwitter />}
					/>
				</Link>
				<Link
					aria-label="Check out my GitHub"
					href="https://github.com/sudaismoorad"
					target="_blank"
				>
					<IconButton
						bg="none"
						aria-label="Check out my GitHub"
						icon={<FiGithub />}
					/>
				</Link>
                <DarkModeSwitch />
			</Flex>
		</Stack>
	);
};

export default Navbar;

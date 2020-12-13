import { Flex, IconButton, Link, Stack, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { FiGithub, FiTwitter } from "react-icons/fi";

type NavbarProps = {
	sticky?: boolean;
};

const Navbar = (props: NavbarProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode == "dark";
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
				<NextLink href="/">
					<Link py={2} px={3}>
						S
					</Link>
				</NextLink>
				<Link py={2} px={3} href="/#projects">
					Projects
				</Link>
				<NextLink href="/public/resume.pdf">
					<Link py={2} px={3}>
						Resume
					</Link>
				</NextLink>
				<NextLink href="/blog">
					<Link py={2} px={3}>
						Blog
					</Link>
				</NextLink>
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

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
	return (
		<>
			<InputGroup>
				<InputLeftElement pointerEvents="none" children={<SearchIcon />} />
				<Input placeholder="Search blog posts" />
			</InputGroup>
		</>
	);
};

export default SearchBar;

import { Stack } from '@chakra-ui/react'

const Main = ({children, ...props}) => (
  // <Stack
  //   spacing="1.5rem"
  //   width="100%"
  //   maxWidth="48rem"
  //   mt="-45vh"
  //   pt="8rem"
  //   px="1rem"
  //   {...props}
  // >
  //   { children }
  // </ Stack>
  <Stack maxWidth="42rem" m="auto" px="1rem" py="2rem" {...props}>
	  {children}
	</Stack>
)

export default Main

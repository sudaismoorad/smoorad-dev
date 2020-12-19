import { Stack } from '@chakra-ui/react'

const Main = ({children, ...props}) => (
  <Stack
	  maxWidth="42rem" 
	  m="auto" 
	  px="1rem" 
	  py="2rem" 
	  w="100%" 
	//   alignItems="center"
	//   justifyContent="space-between"			
	  {...props}
	>
	  {children}
	</Stack>
)

export default Main

import { Flex, Stack, useColorMode } from '@chakra-ui/react'

const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
      <Stack
        bgSize="100%"
        minHeight="100vh"
        flex="wrap"
        bg={bgColor[colorMode]}
        color={color[colorMode]}        
        >
          <Flex 
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            {...props}
          />
      </Stack>
  )
}

export default Container
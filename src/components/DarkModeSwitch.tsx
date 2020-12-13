import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      bg="blank"
      aria-label="Dark Mode Switch"
      icon={isDark ? <MoonIcon /> : <SunIcon />}
      onMouseDown={toggleColorMode}
    />
  )
}

import { Box, Heading, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <>
      <Heading as="h1">Hi, I'm Sudais Moorad</Heading>
      <Box>
        <Text my={4}>
          I am a Student at Vassar College, NY where I'm majoring in Math and
          Computer Science with a minor in Quantitative Economics.
        </Text>
        <Text my={4}>
          This is my personal slice of the internet hope you like it!
        </Text>
      </Box>
    </>
  );
};

export default AboutMe;

import { Box, Container, VStack, Heading, Text, Flex, Spacer, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaHome, FaUserCircle, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} borderRadius="md" mb={6} alignItems="center">
        <Heading size="md">Tech Forum</Heading>
        <Spacer />
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaHome />} />
          <IconButton aria-label="Profile" icon={<FaUserCircle />} />
          <Button colorScheme="teal" variant="outline">Login</Button>
        </HStack>
      </Flex>

      {/* Main Content */}
      <VStack spacing={8} align="stretch">
        {/* Discussion Topics */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading size="lg" mb={4}>Discussion Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading size="md">How to learn React?</Heading>
              <Text>Started by User123</Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading size="md">Best practices for Node.js</Heading>
              <Text>Started by User456</Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading size="md">CSS Grid vs Flexbox</Heading>
              <Text>Started by User789</Text>
            </Box>
          </VStack>
        </Box>

        {/* User Comments */}
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading size="lg" mb={4}>User Comments</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.50" borderRadius="md">
              <Text><strong>User123:</strong> I think React is great for building UIs!</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md">
              <Text><strong>User456:</strong> Node.js is perfect for building scalable network applications.</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md">
              <Text><strong>User789:</strong> I prefer CSS Grid for layout and Flexbox for alignment.</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
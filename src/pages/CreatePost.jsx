import { useState } from "react";
import { Box, Container, VStack, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, Textarea } from "@chakra-ui/react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!content) errors.content = "Content is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle successful post creation (e.g., send data to server)
      console.log({ title, content });
    }
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading size="lg" mb={4}>Create New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={errors.title}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.content}>
              <FormLabel>Content</FormLabel>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              {errors.content && <FormErrorMessage>{errors.content}</FormErrorMessage>}
            </FormControl>
            <Button type="submit" colorScheme="blue">Create Post</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;
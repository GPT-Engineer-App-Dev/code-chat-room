import { useState } from "react";
import { Box, Container, VStack, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!username) errors.username = "Username is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle successful registration (e.g., send data to server)
      console.log({ username, email, password });
    }
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading size="lg" mb={4}>Register</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
            </FormControl>
            <Button type="submit" colorScheme="blue">Register</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
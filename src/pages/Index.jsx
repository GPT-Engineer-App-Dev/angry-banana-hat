import { Container, VStack, Image, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Angry Banana Page</Text>
        <Image src="/images/angry-banana-tophat.png" alt="Angry Banana with Tophat" boxSize="300px" />
        <Text>Enjoy this unique and expressive artwork!</Text>
      </VStack>
    </Container>
  );
};

export default Index;
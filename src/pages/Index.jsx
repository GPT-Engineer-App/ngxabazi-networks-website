import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="blue.600" color="white" py={4} mb={8}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            Ngxabazi Networks
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </HStack>
      </Box>

      {/* Main Content */}
      <VStack spacing={8} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Leading Electrical Construction Services
          </Heading>
          <Text fontSize="lg" mb={4}>
            Specializing in both light and heavy current solutions.
          </Text>
          <Button colorScheme="blue" size="lg">
            Get a Quote
          </Button>
        </Box>

        {/* About Us Section */}
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            About Us
          </Heading>
          <Text fontSize="md" mb={4}>
            Ngxabazi Networks is a premier electrical construction company with years of experience in delivering top-notch services for both light and heavy current projects. Our team of skilled professionals is dedicated to ensuring the highest standards of quality and safety in every project we undertake.
          </Text>
          <Image src="https://images.unsplash.com/photo-1454694220579-9d6672b1ec2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTcxNzcwMzY3MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Electrical Construction" borderRadius="md" />
        </Box>

        {/* Services Section */}
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Our Services
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading as="h4" size="md">
                Light Current Solutions
              </Heading>
              <Text>We provide comprehensive light current solutions including wiring, lighting, and maintenance services.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">
                Heavy Current Solutions
              </Heading>
              <Text>Our heavy current services cover high voltage installations, industrial power systems, and more.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Contact Us
          </Heading>
          <VStack spacing={4} align="stretch">
            <HStack>
              <FaPhone />
              <Text>+123 456 7890</Text>
            </HStack>
            <HStack>
              <FaEnvelope />
              <Text>info@ngxabazinetworks.com</Text>
            </HStack>
            <Button colorScheme="blue" size="lg">
              Send a Message
            </Button>
          </VStack>
        </Box>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" py={4} mt={8}>
        <VStack spacing={4}>
          <Text>&copy; {new Date().getFullYear()} Ngxabazi Networks. All rights reserved.</Text>
          <Divider borderColor="whiteAlpha.400" />
          <HStack spacing={4}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;

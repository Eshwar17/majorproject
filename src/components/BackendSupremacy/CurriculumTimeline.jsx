// Curriculum.tsx / Curriculum.jsx
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaPython, FaDatabase, FaRocket, FaTools } from "react-icons/fa";
import { RiCodeBoxLine } from "react-icons/ri";

export default function Curriculum() {
  return (
    <Box mt={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={6} fontFamily="Poppins">
        📚 Backend Supremacy Curriculum
      </Heading>

      <Flex justifyContent="space-between" flexWrap="wrap" gap={6}>
        {/* Languages & Frameworks */}
        <Box
          flexBasis={["100%", "48%", "30%"]}
          textAlign="center"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
        >
          <FaPython size={40} />
          <Heading as="h3" fontSize="lg" mt={2}>
            Languages / Frameworks
          </Heading>
          <Text mt={2}>
            <b>Python</b>, <b>Flask</b>, <b>SQLAlchemy</b> — build and scale production backends.
          </Text>
        </Box>

        {/* Databases */}
        <Box
          flexBasis={["100%", "48%", "30%"]}
          textAlign="center"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
        >
          <FaDatabase size={40} />
          <Heading as="h3" fontSize="lg" mt={2}>
            Databases
          </Heading>
          <Text mt={2}>
            <b>SQLite</b> for dev, <b>PostgreSQL</b> for production — with clean ORM modeling.
          </Text>
        </Box>

        {/* APIs */}
        <Box
          flexBasis={["100%", "48%", "30%"]}
          textAlign="center"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
        >
          <RiCodeBoxLine size={40} />
          <Heading as="h3" fontSize="lg" mt={2}>
            APIs
          </Heading>
          <Text mt={2}>
            RESTful design, schema/versioning, and testing with <b>Postman</b>.
          </Text>
        </Box>

        {/* Deployment */}
        <Box
          flexBasis={["100%", "48%", "30%"]}
          textAlign="center"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
        >
          <FaRocket size={40} />
          <Heading as="h3" fontSize="lg" mt={2}>
            Deployment
          </Heading>
          <Text mt={2}>
            Deploy on <b>Render</b>, use <b>Vercel</b> (via <code>flask-vercel</code>), and CI/CD with <b>GitHub</b>.
          </Text>
        </Box>

        {/* Extras */}
        <Box
          flexBasis={["100%", "48%", "30%"]}
          textAlign="center"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="md"
        >
          <FaTools size={40} />
          <Heading as="h3" fontSize="lg" mt={2}>
            Extras
          </Heading>
          <Text mt={2}>
            <b>dotenv</b>, <b>Jinja2</b>, <b>Flask-WTF</b>, <b>Alembic</b>, <b>Gunicorn</b>, and more.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

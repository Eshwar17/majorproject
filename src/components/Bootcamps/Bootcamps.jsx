import {
  Box,
  Text,
  Center,
  Button,
  Image,
  Badge,
  HStack,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Select,
  useColorModeValue,
  Tag,
  TagLabel,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedUnderline from "../Underlines/AnimatedUnderline";


const MotionBox = motion(Box);

/* ========================= DATA ========================= */

const BOOTCAMPS = [
  /* ================= MACRO ================= */
  {
    id: 1,
    title: "Build the Web. Ship Like a Pro.",
    type: "Macro",
    duration: "3 Months",
    status: "Closed",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description: "Master frontend & backend with production-ready workflows.",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    reviews: 1920,
    price: 75000,
    discount: 23000,
    curriculum: ["Frontend", "Backend", "APIs", "Deployment", "Capstone"],
  },
  {
    id: 2,
    title: "Data That Speaks.",
    type: "Macro",
    duration: "3 Months",
    status: "Closed",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Turn raw data into insights that drive decisions.",
    tags: ["SQL", "Python", "Excel", "Power BI"],
    reviews: 1460,
    price: 68000,
    discount: 17000,
    curriculum: ["SQL", "Python", "Dashboards", "Case Studies"],
  },
  {
    id: 3,
    title: "Engineer Data at Scale.",
    type: "Macro",
    duration: "6 Months",
    status: "Closed",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    description: "Build data pipelines for large-scale systems.",
    tags: ["Python", "Spark", "Airflow", "AWS"],
    reviews: 980,
    price: 98000,
    discount: 16000,
    curriculum: ["ETL", "Big Data", "Cloud", "Capstone"],
  },
  {
    id: 4,
    title: "Cloud. Containers. Confidence.",
    type: "Macro",
    duration: "6 Months",
    status: "Closed",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    description: "Deploy, scale, and monitor applications in the cloud.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    reviews: 870,
    price: 95000,
    discount: 22000,
    curriculum: ["Cloud Basics", "Docker", "K8s", "Pipelines"],
  },

  /* ================= MICRO ================= */
  {
    id: 10,
    title: "Python Without the Pain.",
    type: "Micro",
    duration: "1 Month",
    status: "Closed",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    description: "Learn Python fundamentals with hands-on practice.",
    tags: ["Python", "OOPS"],
    reviews: 2100,
    price: 18000,
    discount: 7000,
    curriculum: ["Basics", "Functions", "Mini Project"],
  },
  {
    id: 11,
    title: "SQL That Actually Works.",
    type: "Micro",
    duration: "2 Months",
    status: "Closed",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    description: "Write efficient queries and optimize databases.",
    tags: ["SQL", "Indexes"],
    reviews: 1750,
    price: 22000,
    discount: 6000,
    curriculum: ["Queries", "Joins", "Indexes"],
  },
  {
    id: 12,
    title: "Git Like a Pro.",
    type: "Micro",
    duration: "1 Month",
    status: "Closed",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    description: "Version control and collaboration mastery.",
    tags: ["Git", "GitHub"],
    reviews: 1340,
    price: 8000,
    discount: 8000,
    curriculum: ["Git Basics", "Branching", "PRs"],
  },

  /* ================= TECH IN A WEEK ================= */
  ...[
    {
      tech: "ReactJS",
      desc: "Build modern UI components and hooks.",
      tags: ["React", "Hooks"],
      reviews: 820,
    },
    {
      tech: "NodeJS",
      desc: "Create backend APIs and services.",
      tags: ["Node", "Express"],
      reviews: 760,
    },
    {
      tech: "Python",
      desc: "Python essentials in 7 focused days.",
      tags: ["Python"],
      reviews: 910,
    },
    {
      tech: "Figma",
      desc: "Design clean, user-friendly interfaces.",
      tags: ["Figma", "UI/UX"],
      reviews: 680,
    },
    {
      tech: "SQL",
      desc: "Understand databases fast and clearly.",
      tags: ["SQL"],
      reviews: 740,
    },
  ].map((item, i) => ({
    id: 100 + i,
    title: `${item.tech} in 7 Days`,
    type: "TechInWeek",
    duration: "7 Days",
    dates: "12 Jan – 31 Mar",
    status: "Open",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: item.desc,
    tags: item.tags,
    reviews: item.reviews,
    price: 5999,
    discount: 999,
    curriculum: ["Core Concepts", "Hands-on Labs", "Mini Project"],
  })),
];

/* ========================= COMPONENTS ========================= */

const SliderRow = ({ children }) => (
  <Box display="flex" gap={6} overflowX="auto" pb={4}>
    {children}
  </Box>
);

const CurriculumModal = ({ title, curriculum }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size="sm" variant="outline" onClick={onOpen}>
        View Curriculum
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="flex-start">
              {curriculum.map((c, i) => (
                <Text key={i}>• {c}</Text>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const BootcampCard = ({ data, cardBg, mutedText }) => (
  <MotionBox
    minW="320px"
    bg={cardBg}
    borderRadius="xl"
    boxShadow="xl"
    whileHover={{ y: -8 }}
  >
    <Image src={data.image} h="180px" w="100%" objectFit="cover" />

    <VStack p={5} align="flex-start" spacing={3}>
      <Badge bg="#FFA900" color="black">
        {data.type}
      </Badge>

      <Text fontWeight="800">{data.title}</Text>
      <Text fontSize="sm" color={mutedText}>
        {data.description}
      </Text>

      <HStack flexWrap="wrap">
        {data.tags.map((tag) => (
          <Tag key={tag} size="sm" colorScheme="blue">
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </HStack>

      <Text fontSize="sm">⭐ 4.8 • {data.reviews.toLocaleString()} reviews</Text>

      <CurriculumModal title={data.title} curriculum={data.curriculum} />

      <HStack>
        <Text as="s">₹{data.price}</Text>
        <Text fontWeight="800" color="#1E4FBC">
          ₹{data.discount}
        </Text>
      </HStack>

      <Button
        w="full"
        bg="#1E4FBC"
        color="white"
        isDisabled={data.status !== "Open"}
      >
        {data.status === "Open" ? "Enroll Now" : "Registrations Closed"}
      </Button>
    </VStack>
  </MotionBox>
);

/* ========================= PAGE ========================= */

export default function BootcampsPage() {
  const [type, setType] = useState("All");

  const cardBg = useColorModeValue("white", "gray.800");
  const mutedText = useColorModeValue("gray.600", "gray.400");

  return (
    <Box px={[4, 10]} py={16}>
      <Center flexDirection="column">
        <Text
          fontSize={["4xl", "5xl", "7xl"]}
          fontWeight="800"
          fontFamily="Bricolage Grotesque"
          textAlign="center"
          color={useColorModeValue("black", "white")}
        >
          Bootcamps
        </Text>
        <AnimatedUnderline />
      </Center>

      <Center mt={10}>
        <Select w="220px" onChange={(e) => setType(e.target.value)}>
          <option value="All">All Bootcamps</option>
          <option value="Macro">Macro</option>
          <option value="Micro">Micro</option>
          <option value="TechInWeek">Tech in a Week</option>
        </Select>
      </Center>

      {["Macro", "Micro", "TechInWeek"].map((section) => (
        <Box key={section} mt={20}>
          <Text fontSize="3xl" fontWeight="800" color="#1E4FBC" mb={6}>
            {section === "Macro"
              ? "Macro Bootcamps"
              : section === "Micro"
              ? "Micro Bootcamps"
              : "Tech in a Week 🚀"}
          </Text>
          <SliderRow>
            {BOOTCAMPS.filter(
              (b) => (type === "All" || b.type === type) && b.type === section
            ).map((b) => (
              <BootcampCard
                key={b.id}
                data={b}
                cardBg={cardBg}
                mutedText={mutedText}
              />
            ))}
          </SliderRow>
        </Box>
      ))}

      {/* ================= FREE YOUTUBE COURSES ================= */}
      <Box mt={24}>
        <Text fontSize="3xl" fontWeight="800" mb={6} color="#1E4FBC">
          Free Courses on YouTube 🎥
        </Text>

        <SimpleGrid columns={[1, 3]} spacing={6}>
          {[
            {
              title: "Machine Learning in Telugu",
              desc: "Understand ML concepts with real-world examples.",
              img: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
              link: "https://youtube.com/playlist?list=ML_TELUGU",
            },
            {
              title: "DSA in Telugu using C++",
              desc: "Crack data structures step-by-step.",
              img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
              link: "https://youtube.com/playlist?list=DSA_CPP",
            },
            {
              title: "DSA in Telugu using Python",
              desc: "Learn DSA using Python with easy explanations.",
              img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
              link: "https://youtube.com/playlist?list=DSA_PY",
            },
          ].map((course) => (
            <MotionBox
              key={course.title}
              p={6}
              borderRadius="xl"
              boxShadow="lg"
              bg={cardBg}
              whileHover={{ y: -6 }}
            >
              <Image
                src={course.img}
                h="160px"
                w="100%"
                objectFit="cover"
                borderRadius="lg"
                mb={4}
              />
              <Text fontWeight="800">{course.title}</Text>
              <Text fontSize="sm" mb={4} color={mutedText}>
                {course.desc}
              </Text>
              <Button
                as="a"
                href={course.link}
                target="_blank"
                bg="#FF0000"
                color="white"
              >
                Watch Playlist
              </Button>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* UPCOMING */}
        <Text fontSize="2xl" fontWeight="800" mt={16} mb={6}>
          Upcoming Free Courses 🚀
        </Text>

        <SimpleGrid columns={[1, 3]} spacing={6}>
          {[
            "JavaScript in Telugu",
            "UI/UX in Telugu",
            "GenAI in Telugu",
          ].map((title) => (
            <Box
              key={title}
              p={6}
              borderRadius="xl"
              border="2px dashed"
              borderColor="#1E4FBC"
              bg={cardBg}
            >
              <Text fontWeight="800">{title}</Text>
              <Text fontSize="sm" mt={2} color={mutedText}>
                Launching soon. Stay tuned!
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

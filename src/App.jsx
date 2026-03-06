import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  SimpleGrid,
  Tag,
  Divider,
} from '@chakra-ui/react'

const professionalProjects = [
  'Collaborative Rich Text Editor (Tiptap, ProseMirror, Yjs)',
  'Word Add-in and Adobe InDesign automation scripts',
  'ERP and financial system integrations',
  'Automation tools replacing spreadsheet workflows',
  'Enterprise portals and web platforms',
]

const sideProjects = [
  'Games and interactive experiences with Pixi.js',
  'Automation tools',
  'Developer utilities',
  'Experimental web applications',
]

const focusAreas = [
  { title: 'Frontend', tags: ['React', 'Vue.js', 'TypeScript', 'Rich Text Editors'] },
  { title: 'Collaborative', tags: ['Tiptap', 'ProseMirror', 'Yjs', 'CRDTs', 'Real-time'] },
  { title: 'Backend & APIs', tags: ['Node.js', 'NestJS', 'PHP', 'REST', 'WebSockets', 'Redis'] },
  { title: 'Data & Integrations', tags: ['MySQL', 'Financial APIs', 'ERP', 'Automation'] },
]

const experience = [
  { role: 'Software Engineer', company: 'ArcoTech', period: '2023 — Present' },
  { role: 'Front-end Developer', company: 'Develcode', period: '2022 — 2023' },
  { role: 'Front-end Developer', company: 'Comeia', period: '2022 — 2023' },
  { role: 'Web Developer', company: 'Boa Comunicação', period: '2020 — 2022' },
  { role: 'Web Developer', company: 'Renovel Renault', period: '2019 — 2020' },
]

function ExternalLink({ href, children, ...props }) {
  return (
    <Link href={href} isExternal color="blue.400" _hover={{ color: 'blue.300', textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  )
}

export default function App() {
  return (
    <Box minH="100vh" position="relative">
      <Box
        className="page-bg"
        position="fixed"
        inset={0}
        zIndex={0}
        aria-hidden="true"
      />
      <Box position="relative" zIndex={1} minH="100vh">
        <Container maxW="3xl" py={{ base: 8, md: 12 }} px={4}>
        {/* Hero */}
        <VStack align="stretch" spacing={2} mb={12} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="700" color="white">
            Wendell Neves
          </Heading>
          <Text fontSize="lg" fontWeight="600" color="blue.400">
            Software Engineer
          </Text>
          <Text color="gray.400" maxW="xl" mx="auto">
            Building scalable web applications, collaborative systems and developer tooling
          </Text>
          <HStack justify="center" gap={4} flexWrap="wrap" mt={2}>
            <ExternalLink href="https://github.com/Neveskai">GitHub @Neveskai</ExternalLink>
            <Text as="span" color="gray.500">•</Text>
            <ExternalLink href="mailto:wnevesky@gmail.com">wnevesky@gmail.com</ExternalLink>
            <Text as="span" color="gray.500">•</Text>
            <Text as="span" color="gray.400">Brazil</Text>
          </HStack>
        </VStack>

        <Divider borderColor="whiteAlpha.300" mb={8} />

        {/* About */}
        <Box mb={10}>
          <Heading as="h2" size="md" mb={4} color="white">
            About
          </Heading>
          <Text mb={3} color="gray.300">
            I'm a Software Engineer focused on <strong style={{ color: '#fff' }}>building complex web applications and collaborative systems</strong>.
          </Text>
          <Text mb={3} color="gray.300">
            My work spans the full product lifecycle — from <strong style={{ color: '#fff' }}>problem discovery and validation</strong> to{' '}
            <strong style={{ color: '#fff' }}>architecture design and implementation</strong>. I enjoy creating abstractions, developer tools and
            infrastructure that reduce complexity and allow teams to ship faster with confidence.
          </Text>
          <Text mb={3} color="gray.300">
            I have strong experience building <strong style={{ color: '#fff' }}>rich text editors, real-time collaborative applications, and
            complex integrations</strong>, including systems built on <strong style={{ color: '#fff' }}>Tiptap, ProseMirror and Yjs</strong>.
          </Text>
          <Text color="gray.300">
            I'm particularly interested in: scalable frontend architecture, collaborative editing systems, developer
            experience and tooling, automation and integrations, pragmatic product engineering.
          </Text>
        </Box>

        {/* Focus Areas */}
        <Box mb={10}>
          <Heading as="h2" size="md" mb={4} color="white">
            Core Focus Areas
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
            {focusAreas.map((area) => (
              <Box
                key={area.title}
                p={4}
                bg="whiteAlpha.100"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
              >
                <Text fontWeight="600" mb={2} color="white">
                  {area.title}
                </Text>
                <HStack flexWrap="wrap" gap={2}>
                  {area.tags.map((tag) => (
                    <Tag key={tag} size="sm" colorScheme="blue" variant="subtle">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Projects */}
        <Box mb={10}>
          <Heading as="h2" size="md" mb={4} color="white">
            What I'm Building
          </Heading>
          <VStack align="stretch" spacing={6}>
            <Box>
              <Text fontWeight="600" mb={2} color="white">
                Professional Work
              </Text>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Collaborative document platforms, enterprise portals, automation tools.
              </Text>
              <VStack align="stretch" spacing={1} pl={2}>
                {professionalProjects.map((item) => (
                  <Text key={item} as="li" fontSize="sm" color="gray.300">
                    {item}
                  </Text>
                ))}
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="600" mb={2} color="white">
                Side Projects
              </Text>
              <Text fontSize="sm" color="gray.400" mb={3}>
                Experiments and personal projects on GitHub.
              </Text>
              <VStack align="stretch" spacing={1} pl={2}>
                {sideProjects.map((item) => (
                  <Text key={item} as="li" fontSize="sm" color="gray.300">
                    {item}
                  </Text>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* Experience */}
        <Box mb={10}>
          <Heading as="h2" size="md" mb={4} color="white">
            Experience
          </Heading>
          <VStack align="stretch" spacing={3}>
            {experience.map((job) => (
              <Box
                key={`${job.company}-${job.period}`}
                p={3}
                bg="whiteAlpha.100"
                borderRadius="md"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
              >
                <Text fontWeight="600" color="white">
                  {job.role} — {job.company}
                </Text>
                <Text fontSize="sm" color="gray.400">
                  {job.period}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Divider borderColor="whiteAlpha.300" mb={8} />

        {/* Footer / Links */}
        <VStack spacing={4} textAlign="center">
          <Text fontWeight="600" color="gray.300">
            Building tools and systems that make developers more productive.
          </Text>
          <HStack gap={6} flexWrap="wrap" justify="center">
            <ExternalLink href="https://github.com/Neveskai">GitHub</ExternalLink>
            <ExternalLink href="mailto:wnevesky@gmail.com">Email</ExternalLink>
          </HStack>
        </VStack>
        </Container>
      </Box>
    </Box>
  )
}

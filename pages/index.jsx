import NextLink from 'next/link';
import {
  Button,
  Link,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Russia!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              idevtier
            </Heading>
            <p>Developer and designer</p>
          </Box>
          <Box
            flexsrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/idevtier.jpg"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Idevtier is a freelance and a full-stack developer based in
            Saint-Pretersburg with a passion for building digital services/stuff
            he wants. He was a knack for all things launching products, from
            planning and designing all the way to solving real-ife problems with
            code. When not online, he loves hanging out with firends. Currently,
            he is developing his own product called{' '}
            <NextLink href="/works/documents-time-recorder">
              <Link>Documents time recorder</Link>
            </NextLink>
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Kazan
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Graduates in Moscow Technical University of Communications and
            Informatics
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Work with <Link href="https://haasonline.com">HaasOnline</Link> on
            automating crypto trading bots setup
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Works as a freelance
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Snowboarding, hackathons, movies and OS customization
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;

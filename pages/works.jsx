import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbTimeRecorder from '../public/images/works/timeRecorder.png';
import thumbDolorDomum from '../public/images/works/dolorDomum.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="timeRecorder"
              title="Time Recorder"
              thumbnail={thumbTimeRecorder}
            >
              Crossplatform documents time editing recorder
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="dolorDomum"
              title="Dolor Domum"
              thumbnail={thumbDolorDomum}
            >
              Simple landing for alternative energy heating
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;

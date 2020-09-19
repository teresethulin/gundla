import { getData } from "../../lib/api";
import styled from "styled-components";
import Layout from "../../components/layout";
import Booking from "../../components/events/Booking";

const Container = styled.ul`
  margin: 0;
  padding: 0px 12px;
`;

export default function BookEvent({ event }) {
  return (
    <Layout pageTitle={event.slug}>
      <Container>
        <Booking event={event} />
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const events = await getData("events");
  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = await getData(`events?slug=${params.slug}`);

  return { props: { event: event[0] } };
}

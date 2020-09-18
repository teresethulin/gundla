import { getData } from "../../lib/api";
import Event from "../../components/events/Event";
import GreenPost from "../../components/post/GreenPost";
import EventInfo from "../../components/events/EventInfo";
import Layout from "../../components/layout";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0 0;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function Events({ events, post }) {
  return (
    <Layout pageTitle="Events">
      <Container>
        <GreenPost post={post[0]} />
        <EventInfo posts={post} />
        <List>
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </List>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const events = await getData("events");
  const { post } = await getData("event-page");
  return {
    props: { events, post },
    revalidate: 30,
  };
}

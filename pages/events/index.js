import { getData } from "../../lib/api";
import Event from "../../components/events/Event";
import GreenPost from "../../components/post/GreenPost";
import EventInfo from "../../components/events/EventInfo";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0 0;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function Events({ events, post, first_post }) {
  return (
    <Container>
      <GreenPost post={first_post} />
      <EventInfo posts={post} />
      <List>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </List>
    </Container>
  );
}

export async function getStaticProps() {
  const events = await getData("/events");
  const { post, first_post } = await getData("/event-page");
  return {
    props: { events, post, first_post },
    revalidate: 30,
  };
}

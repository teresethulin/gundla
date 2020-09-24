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
  @media (min-width: 768px) {
    margin: 15px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 25px;
    gap: 40px;
  }
`;

export default function Events({ events, post, first_post, image }) {
  return (
    <Container>
      <GreenPost post={first_post} />
      <EventInfo posts={post} image={image} />
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
  const { post, first_post, image } = await getData("/event-page");
  const info = await getData("/info");
  const { hours } = await getData("/opening-hours");

  return {
    props: { events, post, first_post, image, hours, info },
    revalidate: 30,
  };
}

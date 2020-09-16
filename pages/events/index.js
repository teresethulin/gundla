import { getAllPosts } from "../../lib/api";
import Event from "../../components/Event";
import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0px 12px;
`;

export default function Events({ events }) {
  return (
    <List>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </List>
  );
}

export async function getStaticProps(context) {
  const events = await getAllPosts();

  return {
    props: { events },
  };
}

import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  padding: 32px 22px;
  background-color: var(--main-yellow);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

export default function Event({ event }) {
  return (
    <Card>
      <p>{event.category}</p>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Platser: {event.max_participants}</p>
      <p>
        {event.date} {event.start_time}
      </p>
    </Card>
  );
}

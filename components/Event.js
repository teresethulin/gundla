import styled from "styled-components";
import Link from "next/link";

const Card = styled.div`
  width: 100%;
  padding: 32px 22px;
  background-color: var(--main-yellow);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 5px;
`;

const Cat = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 0;
`;
const Desc = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
`;
const Title = styled.h3`
  font-size: 18px;
`;
const Date = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 96px;
  height: 37px;
  border: 1px solid #000000;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

export default function Event({ event }) {
  return (
    <Card>
      <Cat>{event.category}</Cat>
      <Title>{event.title}</Title>
      <Date>{event.date}</Date>
      <Desc>{event.description}</Desc>
      <p>
        {event.date} {event.start_time}
      </p>
      <Button>Boka</Button>
    </Card>
  );
}

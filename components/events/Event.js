import Link from "next/link";

import {
  CardEvent,
  CatEvent,
  DescEvent,
  TitleEvent,
  DateEvent,
  ButtonEvent,
} from "./style";

export default function Event({ event }) {
  return (
    <CardEvent>
      <CatEvent>{event.category}</CatEvent>
      <TitleEvent>{event.title}</TitleEvent>
      <DateEvent>{event.date}</DateEvent>
      <DescEvent>{event.description}</DescEvent>
      <p>
        {event.date} {event.start_time}
      </p>
      <Link href={"events/[slug]"} as={`/events/${event.slug}`}>
        <ButtonEvent>Boka</ButtonEvent>
      </Link>
    </CardEvent>
  );
}

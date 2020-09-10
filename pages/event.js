function Event({ events }) {
  console.log(events);
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Platser: {event.max_participants}</p>
          <p>
            {event.date} {event.start_time}
          </p>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://gundla-server.herokuapp.com/events");
  const json = await res.json();

  return {
    props: {
      events: json,
    },
  };
}

export default Event;

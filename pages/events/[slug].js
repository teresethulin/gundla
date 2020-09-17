import { getData } from "../../lib/api";

export default function BookEvent({ event }) {
  return (
    <div>
      <h1>{event.title}</h1>
    </div>
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
  console.log(params.slug);
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const event = await getData(`events?slug=${params.slug}`);

  // Pass post data to the page via props
  return { props: { event: event[0] } };
}

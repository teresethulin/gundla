export async function getAllPosts() {
  const res = await fetch("https://gundla-server.herokuapp.com/events");
  const json = await res.json();

  return json;
}

export async function getAllPosts() {
  const res = await fetch("https://gundla-server.herokuapp.com/events");
  const json = await res.json();

  return json;
}
export async function getInfo() {
  const res = await fetch("https://gundla-server.herokuapp.com/info");
  const json = await res.json();

  return json;
}

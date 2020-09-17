export async function getData(endpoint) {
  const res = await fetch(`${process.env.API_ENDPOINT}${endpoint}`);
  const json = await res.json();

  return json;
}

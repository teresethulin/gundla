export async function getData(endpoint) {
  const res = await fetch(`${process.env.API_ENDPOINT}${endpoint}`);
  const json = await res.json();

  return json;
}

export async function getInstagramPictures(profileName) {
  const baseUrl = "https://www.instagram.com";
  const profileUrl = `${baseUrl}/${profileName}`;
  const jsonDataUrl = `${profileUrl}/?__a=1`;

  const response = await fetch(jsonDataUrl);
  const jsonData = await response.json();
  const allPictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;
  const pictures = [];

  for (let i = 0; i < 8; i++) {
    const picture = allPictures[i];
    pictures.push(picture);
  }

  return pictures;
}

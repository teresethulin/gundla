import { Image } from "../components/events/style";

export const imageFunc = (image) => {
  if (image === null) {
    return;
  }
  return <Image src={image.url}></Image>;
};

import { Image } from "../components/events/style";

export const imageFunc = (image) => {
  if (image === null || image === undefined) {
    return;
  }
  return <Image src={image.url}></Image>;
};

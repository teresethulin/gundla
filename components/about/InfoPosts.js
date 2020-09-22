export default function InfoPosts({ info }) {
  const posts = [
    {
      info: info.phone_number,
      logo: "/assets/Vector-2.png",
      link: "",
      alt: "phone logo",
    },
    {
      info: info.email,
      logo: "/assets/Vector-3.png",
      link: "",
      alt: "email logo",
    },
    {
      info: info.address,
      logo: "/assets/Vector-1.png",
      link: "",
      alt: "maps logo",
    },
  ];
  return posts.map((post) => {
    return (
      <div
        style={{
          display: "flex",
          marginTop: 10,
          marginLeft: 0,
          marginBottom: 20,
        }}
      >
        <img
          style={{ marginRight: 20, width: 18 }}
          src={post.logo}
          alt={post.alt}
        />
        <a href={post.link}>
          <p style={{ textDecoration: "underline", margin: 0 }}>{post.info}</p>
        </a>
      </div>
    );
  });
}

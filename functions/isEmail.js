export const isEmail = (email) => {
  if (email !== null || email !== undefined) {
    return (
      <a href={`mailto:${email}`}>
        <p style={{ textDecoration: "underline" }}>{email}</p>
      </a>
    );
  }
  return;
};

import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 0;
  padding: 3vh 5vw;
  background-color: #4e746c;
  color: #fffcf1;
  width: 100vw;
  height: 474px;

  ul {
    list-style: none;
  }
`;

function Footer({ json }) {
  console.log(json);
  return (
    <StyledFooter>
      <ul></ul>
    </StyledFooter>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://gundla-server.herokuapp.com/footer");
  const json = await res.json();

  return {
    props: {
      json,
    },
  };
}

export default Footer;

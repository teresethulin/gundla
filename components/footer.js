import styled from "styled-components";

const footerStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: #4e746c;
  width: 100vw;
  height: 474px;
`;

const Footer = ({ footer }) => {
  console.log(footer);
  return (
    <footerStyled>
      <ul></ul>
    </footerStyled>
  );
};

Footer.getInitialProps = async () => {
  const res = await fetch("https://gundla-server.herokuapp.com/footer");
  const json = await res.json();
  console.log(json);

  return {
    footer: json,
  };
};

export default Footer;

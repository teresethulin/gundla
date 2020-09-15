import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 0;
  padding: 3vh 5vw;
  background-color: #4e746c;
  width: 100vw;
  height: 474px;
`;

function Footer({ info }) {
  console.log(info);
  return (
    <StyledFooter>
      <ul>{info.email}</ul>
    </StyledFooter>
  );
}

export default Footer;

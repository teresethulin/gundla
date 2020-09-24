import styled from "styled-components";

export const MarginCointainer = styled.div`
  margin: 12px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

export const Container = styled.div`
  width: 100%;
  padding: 32px 22px;
  margin: 0px 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 142%;
  color: var(--main-text-color);
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 102%;
  margin-top: 5vh;
  @media (min-width: 768px) {
    margin-top: 10vh;
    width: 70%;
  }
`;
export const Bar = styled.div`
  width: 100%;
  height: 16px;
  background-color: var(--main-bg-black);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

export const DesktopDiv = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 30% 70%;
    margin-bottom: 25px;
  }
`;
export const DesktopDivCenter = styled.div`
  @media (min-width: 768px) {
    display: block;
    text-align: center;
    padding: 0px 10vw;
  }
`;
export const MapsIconFirst = styled.div`
  display: flex;
  margin-top: 10px;
  @media (min-width: 768px) {
  }
`;

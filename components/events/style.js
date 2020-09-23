import styled from "styled-components";
import { Field } from "formik";
import { animated } from "react-spring";

// Booking.js
export const ContainerBooking = styled.div`
  width: 100%;
  background-color: var(--main-bg-brown);
  padding: 32px 22px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16), 2px 2px 0px rgba(0, 0, 0, 0.16);
  margin: 0px;
  @media (min-width: 768px) {
    padding: 32px 82px;
  }
`;
export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// BookingForm
export const ContainerInput = styled.div`
  margin: 16px 0px;
`;

export const Label = styled.label`
  width: 100%;
  display: block;
`;

export const Button = styled.button`
  width: 100%;
  height: 34px;
`;
export const Input = styled(Field)`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding-left: 5px;
  background-color: #ffffff;
  margin-top: 5px;
  border: 0;
  position: relative;
  ::placeholder,
  ::-webkit-input-placeholder {
    position: absolute;
    top: 5px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

// eventInfo.js
export const ContainerInfo = styled.div`
  width: 100%;
  padding: 32px 22px;
  margin: 0px;
  background-color: var(--main-bg-brown);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  @media (min-width: 768px) {
    padding: 70px 10vw;
  }
`;
export const TitleInfo = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 102%;
`;
export const DescInfo = styled.p`
  letter-spacing: 0.01em;
`;

export const Image = styled.img`
  width: 100%;
`;
export const Bar = styled.div`
  width: 100%;
  height: 16px;
  background-color: var(--main-bg-black);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

export const DesktopImage = styled.img`
  display: none;
  width: 100%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  @media (min-width: 768px) {
    display: block;
  }
`;

// Event.js

export const CardEvent = styled.div`
  width: 100%;
  padding: 32px 22px;
  margin: 12px 0px;
  background-color: var(--main-bg-brown);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 5px;
`;

export const CatEvent = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 0;
`;
export const DescEvent = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
`;
export const TitleEvent = styled.h3`
  font-size: 18px;
`;
export const DateEvent = styled.h3`
  font-size: 18px;
  font-weight: bold;
  justify-self: end;
`;

export const ButtonEvent = styled.button`
  width: 96px;
  height: 37px;
  border: 1px solid #000000;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.16);
  justify-self: end;
`;

// Notification
export const ContainerNotis = styled(animated.div)`
  width: 100%;
  background-color: var(--main-bg-green);
  color: var(--main-bg-yellow);
  padding: 12px 22px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16), 2px 2px 0px rgba(0, 0, 0, 0.16);
  margin: 20px 0px;
  @media (min-width: 768px) {
    padding: 12px 82px;
  }
`;

import styled from "styled-components";
import Form from "./Form";

const Container = styled.div`
  width: 100%;
  background-color: #fffcf1;
  padding: 32px 22px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.16);
`;
const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateText = styled.p``;

export default function BookingForm({ event }) {
  return (
    <Container>
      <h2>Bokingsförfrågan</h2>
      <p>{fixCategoryName(event.category)}</p>
      <FlexContainer>
        <h3>{event.title}</h3>
        <DateText>{dateCheck(event.date)}</DateText>
      </FlexContainer>
      <Form />
    </Container>
  );
}

const fixCategoryName = (category) => {
  if (category === "Foredrag") {
    return "Föredrag";
  } else {
    return category;
  }
};

const dateCheck = (date) => {
  if (date === null) {
    return "Datum ej satt";
  } else {
    return date;
  }
};

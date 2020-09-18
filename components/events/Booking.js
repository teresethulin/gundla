import BookingForm from "./BookingForm";

import { FlexContainer, ContainerBooking } from "./style";

export default function Booking({ event }) {
  return (
    <ContainerBooking>
      <h2>Bokingsförfrågan</h2>
      <p style={{ marginBottom: 5, marginTop: 15 }}>
        {fixCategoryName(event.category)}
      </p>
      <FlexContainer>
        <h3 style={{ margin: 0 }}>{event.title}</h3>
        <p style={{ margin: 0 }}>{dateCheck(event.date)}</p>
      </FlexContainer>
      <BookingForm />
    </ContainerBooking>
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

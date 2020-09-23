import { Formik, Form } from "formik";
import { useState } from "react";

import { SignupSchema } from "./Validation";
import Notification from "./Notification";
import { AxiosReq } from "./AxiosReq";

import {
  FlexContainer,
  ContainerBooking,
  ContainerInput,
  Label,
  Button,
  Input,
  ErrorMessage,
  Bar,
} from "./style";

export default function Booking({ event }) {
  const [confirm, setConfirm] = useState(false);

  return (
    <div style={{ marginBottom: 50 }}>
      <Notification state={confirm} />
      <Bar />
      <ContainerBooking>
        <h2>Bokingsförfrågan</h2>
        <p style={{ marginBottom: 5, marginTop: 15 }}>
          {fixCategoryName(event.category)}
        </p>
        <FlexContainer>
          <h3 style={{ margin: 0 }}>{event.title}</h3>
          <p style={{ margin: 0 }}>{dateCheck(event.date)}</p>
        </FlexContainer>

        <div>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              mail: "",
              participants: 1,
              message: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (data, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              let res = await AxiosReq(data);
              setConfirm(res);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form noValidate="noValidate">
                <ContainerInput>
                  <Label htmlFor="name">Namn*</Label>
                  <Input
                    placeholder="Förnamn Efternamn"
                    name="name"
                    type="text"
                  />
                  {errors.name && touched.name ? (
                    <ErrorMessage>{errors.name}</ErrorMessage>
                  ) : null}
                </ContainerInput>

                <ContainerInput>
                  <Label htmlFor="phone">Telefonnummer*</Label>
                  <Input
                    placeholder="+46"
                    name="phone"
                    type="number"
                    as={Input}
                  />
                  {errors.phone && touched.phone ? (
                    <ErrorMessage>{errors.phone}</ErrorMessage>
                  ) : null}
                </ContainerInput>

                <ContainerInput>
                  <Label htmlFor="mail">Mail*</Label>
                  <Input
                    placeholder="Din mailadress"
                    name="mail"
                    type="email"
                  />
                  {errors.mail && touched.mail ? (
                    <ErrorMessage>{errors.mail}</ErrorMessage>
                  ) : null}
                </ContainerInput>

                <ContainerInput>
                  <Label htmlFor="participants">Hur många personer?*</Label>
                  <Input component="select" as={Input} name="participants">
                    {[...Array(10).keys()].map((x) => {
                      return (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      );
                    })}
                  </Input>
                </ContainerInput>

                <ContainerInput>
                  <Label htmlFor="message">Övrigt</Label>
                  <Input
                    style={{ height: 110, resize: "none", padding: 10 }}
                    placeholder="Skriv meddelande..."
                    name="message"
                    component="textarea"
                  />
                </ContainerInput>
                <p>* Obligatiskt fält</p>
                <p style={{ marginTop: 40, marginBottom: 40 }}>
                  Då vi har begränsat med plats kommer de som hör av sig först
                  få platser. Vi hör av oss inom en arbetsdag för bekräftelse
                  kring bokningen. Väl mött.
                </p>
                <Button disabled={isSubmitting} type="submit">
                  Skicka bokningsförfrågan
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </ContainerBooking>
      <Bar />
    </div>
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

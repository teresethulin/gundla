import { Formik, Form } from "formik";

import { SignupSchema } from "./Validation";
import { ContainerInput, Label, Button, Input } from "./style";

export default function BookingForm() {
  return (
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
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form noValidate="noValidate">
            <ContainerInput>
              <Label htmlFor="name">Namn*</Label>
              <Input placeholder="Förnamn Efternamn" name="name" type="text" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </ContainerInput>

            <ContainerInput>
              <Label htmlFor="phone">Telefonnummer*</Label>
              <Input placeholder="+46" name="phone" type="number" as={Input} />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            </ContainerInput>

            <ContainerInput>
              <Label htmlFor="mail">Mail*</Label>
              <Input placeholder="Din mailadress" name="mail" type="email" />
              {errors.mail && touched.mail ? <div>{errors.mail}</div> : null}
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
              Då vi har begränsat med plats kommer de som hör av sig först få
              platser. Vi hör av oss inom en arbetsdag för bekräftelse kring
              bokningen. Väl mött.
            </p>
            <Button disabled={isSubmitting} type="submit">
              Skicka bokningsförfrågan
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

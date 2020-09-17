import { Formik } from "formik";
import styled from "styled-components";

const Container = styled.div`
  margin: 16px 0px;
`;

const Label = styled.label`
  width: 100%;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
`;
const Button = styled.button`
  width: 100%;
  height: 34px;
`;

export default function Form() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", phone: "", mail: "", participants: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Container>
              <Label htmlFor="name">Namn*</Label>
              <Input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
              ></Input>
            </Container>
            <Container>
              <Label htmlFor="phone">Telefonnummer*</Label>
              <Input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
              ></Input>
            </Container>
            <Container>
              <Label htmlFor="mail">Mail*</Label>
              <Input
                name="mail"
                value={values.mail}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
              ></Input>
            </Container>
            <Container>
              <Label htmlFor="participants">Hur många personer?*</Label>
              <Input
                name="participants"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                type="select"
              ></Input>
              <select>
                <option defaultValue>Ehne mehne Muh</option>
                <option value="1">Test</option>
                <option value="2">Test 2</option>
              </select>
            </Container>
            <Button disabled={isSubmitting} type="submit">
              Skicka bokningsförfrågan
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

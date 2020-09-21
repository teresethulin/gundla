import { useRouter } from "next/router";
import { ContainerNotis } from "./style";
import { useState, useEffect } from "react";
import { useSpring } from "react-spring";

export default function Notification({ state }) {
  const router = useRouter();
  const [open, setConfirm] = useState(state);

  useEffect(() => {
    setConfirm(state);
  }, [state]);

  const props = useSpring({
    transform: open ? "translateY(0px)" : "translateY(-300px)",
    display: open ? "block" : "none",
  });

  return (
    <ContainerNotis style={props}>
      <h3 style={{ marginBottom: 0 }}>Tack för din förfrågan!</h3>
      <p style={{ marginTop: 5, marginBottom: 40 }}>
        Inom en arbetsdag kommer vi att höra av oss för att bekräfta din
        bokning.
      </p>
      <p onClick={() => router.back()} style={{ textDecoration: "underline" }}>
        Tillbaka till eventöversikt
      </p>
    </ContainerNotis>
  );
}

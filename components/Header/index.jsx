// components
import Nav, { NavFrench } from "../Nav";
// styles
// import styles from "./Header.module.scss";

export default function Header() {
  return (
    <section>
      <Nav />
    </section>
  );
}

export function HeaderFrench() {
  return (
    <section>
      <NavFrench />
    </section>
  );
}

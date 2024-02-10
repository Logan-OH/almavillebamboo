import { arrayOf, oneOfType, node } from "prop-types";
// components
import { HeaderFrench } from "../components/Header";
import { FooterFrench } from "../components/Footer";

export default function French({ children }) {
  return (
    <main>
      <HeaderFrench />

      {children}

      <FooterFrench />
    </main>
  );
}

French.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

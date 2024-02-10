import { arrayOf, oneOfType, node } from "prop-types";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Main({ children }) {
  return (
    <main>
      <Header />

      {children}

      <Footer />
    </main>
  );
}

Main.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

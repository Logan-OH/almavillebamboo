import { bool, func } from "prop-types";
import Link from "next/link";
import { MdClear } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
// components
// js
import mobileNavToggle from "../../util/nav";
// data
import { nav } from "../../data/navmap";
// styles
import styles from "./NavMobile.module.scss";
import { Heading } from "../UILib";

export default function NavMobile({ navbarOpen, setNavbarOpen }) {
  return (
    <>
      <section className={styles.navm}>
        <div className={styles.navm__wrapper}>
          <div className={styles.navm__content}>
            <div>
              <Link href="/" className={styles.mobile__navcolor}>
                <Heading type="h2">Almaville Bamboo Co</Heading>
              </Link>
            </div>

            <div>
              {/* eslint-disable-next-line */}
              <div onClick={() => mobileNavToggle(setNavbarOpen)}>
                {navbarOpen ? (
                  <MdClear
                    style={{ color: "#739c6c;", width: "40px", height: "40px" }}
                  />
                ) : (
                  <FiMenu
                    style={{ color: "#739c6c;", width: "40px", height: "40px" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="mobileNavCont" className={styles.navm__links}>
        <div className={styles.navm__linkwrapper}>
          {/* Loop over the list of nav links and add them to the dom */}
          {nav.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={styles.navm__a}
              onClick={() => mobileNavToggle(setNavbarOpen)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

NavMobile.propTypes = {
  navbarOpen: bool,
  setNavbarOpen: func,
};

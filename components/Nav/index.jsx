import { useState } from "react";
import Link from "next/link";
import parse from "html-react-parser";
// components
import NavMobile, { NavMobileFrench } from "../NavMobile";
// data
import { nav, navFrench } from "../../data/navmap";
// js
import mobileNavToggle from "../../util/nav";
// styles
import styles from "./Nav.module.scss";

import { Heading } from "../UILib";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>
      <NavMobile navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <section className={styles.nav__container}>
        <div className={styles.nav__wrapper}>
          <div className={styles.nav__content}>
            <div>
              <Link href="/" className={styles.nav__logo}>
                <Heading type="h2" color="white">
                  Almaville Bamboo Co
                </Heading>
              </Link>
            </div>

            <div className={styles.nav__links}>
              {/* Loop over the list of nav links and add them to the dom */}

              {/* eslint-disable-next-line */}
              {nav.map((link) => {
                if (link.showDesktop) {
                  return (
                    <Link
                      key={link.key}
                      href={link.href}
                      className={styles.nav__a}
                      onClick={() => mobileNavToggle(setNavbarOpen)}
                    >
                      {link.text}
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}

export function NavFrench() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>
      <NavMobileFrench navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <section className={styles.nav__container}>
        <div className={styles.nav__wrapper}>
          <div className={styles.nav__content}>
            <div>
              <Link href="/fr/">
                <img src="/Images/components/Nav/ALKLogo.png" alt="ALK Logo" />
              </Link>
            </div>

            <div className={styles.nav__links}>
              {/* Loop over the list of nav links and add them to the dom */}

              {/* eslint-disable-next-line */}
              {navFrench.map((link) => {
                if (link.showDesktop) {
                  return (
                    <Link
                      key={link.key}
                      href={link.href}
                      className={styles.nav__a}
                      onClick={() => mobileNavToggle(setNavbarOpen)}
                    >
                      {parse(link.text)}
                    </Link>
                  );
                }
              })}
            </div>

  
          </div>
        </div>
      </section>
    </nav>
  );
}

import Link from "next/link";
// components
import { Text, LinkCustom } from "../UILib";
// styles
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className="container">
        <div className={styles.footer__content}>
          <nav className={styles.footer__nav}>
            <section className={styles.footer__navSec}>
              <LinkCustom color="blue" href="/">
                Gallery
              </LinkCustom>

              <LinkCustom color="blue" href="/">
                Before and After
              </LinkCustom>

              <LinkCustom color="blue" href="/">
                About us
              </LinkCustom>

              <LinkCustom color="blue" href="/">
                FAQs
              </LinkCustom>
            </section>

            <section className={styles.footer__navSec}>
              <Link
                href="https://www.facebook.com/profile.php?id=100027732416778"
                rel="nofollow"
                target="_blank"
              >
                <img
                  className={styles.footer__social}
                  src="/Images/27d005718da7e37888530a946029fe9f.png"
                  alt="Facebook Logo"
                />
              </Link>
            </section>
          </nav>

          <section className={styles.footer__sec}>
            <Link href="/" target="_blank" className={styles.footer__logos}>
              Almaville Bamboo Co
            </Link>

            <nav className={styles.footer__alkLinks}>
              <LinkCustom
                color="grey"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                Terms of Use
              </LinkCustom>

              <LinkCustom
                color="grey"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                Privacy Policy
              </LinkCustom>

              <LinkCustom
                color="grey"
                href="/"
                rel="noreferrer"
                target="_blank"
              >
                Cookie Notice
              </LinkCustom>
            </nav>

            <Text type="p1" className={styles.footer__trademark}>
              Copyright 2023 © Almaville Bamboo Co., LLC All rights reserved.
            </Text>
          </section>
        </div>
      </section>
    </footer>
  );
}

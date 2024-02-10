import Link from "next/link";
// components
import { Text, Heading } from "../UILib";
import ButtonLink from "../ButtonLink";
// styles
import styles from "./SampleRequest.module.scss";

export default function samplerequest() {
  return (
    <section className={styles.sample}>
      <div className="container">
        <div className={styles.sample__content}>
          <section className={styles.sample__sec}>
            <Heading align="left" type="h2Large">
              <img src="/Images/components/OrderRequest/computer.svg" alt="" />
              ORDER ONLINE
            </Heading>

            <p className={styles.sample__p}>
              Create a login for our ordering site today by clicking the button
              below.
            </p>

            <ButtonLink
              href="https://myalkus.com/welcome"
              target="_blank"
              type="btn2"
              text="Visit MyALK"
            />
          </section>

          <section className={styles.sample__sec}>
            <Heading
              align="left"
              className={styles.border__bottom}
              type="h2Large"
            >
              <img src="/Images/components/OrderRequest/phone.svg" alt="" />
              ORDER&nbsp;BY&nbsp;PHONE
            </Heading>

            <section className={styles.order__phone}>
              <section className={styles.sample__order}>
                <Text className={styles.sample__header} type="p2">
                  UNITED STATES
                  <br />
                  <strong>
                    <Link href="tel:800-325-7354">800-325-7354</Link>
                  </strong>
                  <br />
                  <span>
                    Mon-Wed: 7:30 AM to 5:30 PM CST <br />
                    Thu-Fri: 7:30 AM to 5:00 PM CST <br />
                  </span>
                  <Link
                    href="mailto:customerservice@alk.net"
                    className={styles.sample__email}
                  >
                    customerservices@alk.net
                  </Link>
                </Text>
              </section>

              <section className={styles.sample__order}>
                <Text className={styles.sample__header} type="p2">
                  Canada
                  <br />
                  <strong>
                    <Link href="tel:800-663-0972">800-663-0972</Link>
                  </strong>
                  <br />
                  <span>Mon-Fri: 8:30 AM to 5:00 PM EDT</span>
                  <br />
                  <Link
                    href="mailto:ca-customerservice@alk.net"
                    className={styles.sample__email}
                  >
                    ca-customerservice@alk.net
                  </Link>
                </Text>
              </section>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}

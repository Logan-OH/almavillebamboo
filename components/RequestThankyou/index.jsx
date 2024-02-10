// components
import { Heading, Text } from "../UILib";
import ButtonLink from "../ButtonLink";
// styles
import styles from "./RequestThankyou.module.scss";

export default function RequestThankyou() {
  return (
    <section id="thanks" className={`${styles.thx} d-none`}>
      <div className="container">
        <div className={styles.thx__content}>
          <Heading align="center" type="h2">
            Thank You for Your Request!
          </Heading>

          <Text align="center" type="p1" className={styles.thx__p1}>
            <span>You will receive a confirmation email shortly.</span>
            <br />
            <br />
            <br />
            Have questions?
          </Text>

          <div className={styles.thx__btnWrapper}>
            <ButtonLink href="/faqs/" text="Check out our FAQs" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function RequestThankyouFrench() {
  return (
    <section id="thanks" className={`${styles.thx} d-none`}>
      <div className="container">
        <div className={styles.thx__content}>
          <Heading align="center" type="h2">
            Merci pour votre demande!
          </Heading>

          <Text align="center" type="p1" className={styles.thx__p1}>
            <span>Vous recevrez sous peu un courriel de confirmation.</span>
            <br />
            <br />
            <br />
            Vous avez des questions?
          </Text>

          <div className={styles.thx__btnWrapper}>
            <ButtonLink href="/fr/faqs/" text="Consultez notre FAQ" />
          </div>
        </div>
      </div>
    </section>
  );
}

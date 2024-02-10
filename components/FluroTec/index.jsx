// styles
import { Heading, Text } from "../UILib";
import styles from "./FluroTech.module.scss";

export default function FluroTec() {
  return (
    <section className={styles.flu}>
      <div className="container">
        <div className={styles.flu__content}>
          <div className={styles.flu__header}>
            <div className={styles.flu__imgWrapper}>
              <img
                src="/Images/pages/our-product/FluroTec-badge.svg"
                alt="FluroTech"
              />
            </div>
            <Heading type="h2Large" color="blue" align="center">
              FluroTec<sup>&reg;</sup>
              <br />
              Barrier Film
            </Heading>
          </div>

          <div className={styles.flu__description}>
            <Text type="p2" className={styles.flu__p2}>
              <strong>
                Provides an effective barrier against extractables and
                leachables, minimizing the risk of impurities, interactions, and
                medicine degradation, to create additional peace of mind for you
                and your patients. This extra layer of security is available for
                4 clear vial options (as marked by the shield icon): 10 cc, 30
                cc, 50 cc, and 100 cc.
              </strong>
            </Text>

            <div className={styles.flu__imgWrapperStoppers}>
              <img
                src="/Images/pages/our-product/flurotec-stoppers@2x.jpg"
                alt="FluroTech"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FluroTecFrench() {
  return (
    <section className={styles.flu}>
      <div className="container">
        <div className={styles.flu__content}>
          <div className={styles.flu__header}>
            <div className={styles.flu__imgWrapper}>
              <img
                src="/Images/pages/our-product/FluroTec-badge.svg"
                alt="FluroTech"
              />
            </div>
            <Heading type="h2Large" color="blue" align="center">
              Film de
              <br />
              protection
              <br />
              FluroTec<sup>MD</sup>
            </Heading>
          </div>

          <div className={styles.flu__description}>
            <Text type="p2" className={styles.flu__p2}>
              <strong>
                Fournit une barrière efficace contre les substances extractibles
                et lixiviables, qui réduit au minimum le risque d’impuretés,
                d’interactions et de dégradation des médicaments pour que vous
                et vos patients ayez une tranquillité d’esprit accrue. Cette
                couche de protection supplémentaire est offerte pour quatre
                flacons clairs (indiquée par l’icône de bouclier) : 10 cc, 30
                cc, 50 cc et 100 cc.
              </strong>
            </Text>

            <div className={styles.flu__imgWrapperStoppers}>
              <img
                src="/Images/pages/our-product/flurotec-stoppers@2x.jpg"
                alt="FluroTech"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

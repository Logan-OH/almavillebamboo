// components
import { Text, LinkCustom } from "../UILib";
// styles
import styles from "./StandardsReportDownload.module.scss";

export default function StandardsReportDownload() {
  return (
    <section className={styles.stan}>
      <img
        className={styles.stan__img}
        src="/Images/components/StandardsReport/usp-standards-report@2x.jpg"
        alt=""
      />

      <div className={styles.stan__text}>
        <Text type="p1">
          <strong>
            Our staff is continually trained in all aspects of cGMPs, Good
            Laboratory Practice (GLP), and quality assurance to ensure unfailing
            expertise in creating the vials we offer.
          </strong>
        </Text>

        <LinkCustom
          className={styles.stan__download}
          href="/download/sterile-summary-paper.pdf"
        >
          <span className={styles.download__adjust}>
            DOWNLOAD OUR USP STANDARDS REPORT
          </span>
        </LinkCustom>
      </div>
    </section>
  );
}



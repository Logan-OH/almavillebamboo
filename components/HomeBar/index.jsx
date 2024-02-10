// components
import Link from "next/link";
// styles
import styles from "./HomeBar.module.scss";

export default function HomeBar() {
  return (
    <section className={styles.home__bar}>
      <div className="container">
        <div className={styles.home__barWrap}>
          <Link
            href="/"
            target="_blank"
            align="center"
            className={styles.home__barText}
          >
            <strong>
              Learn a little about bamboo and Almaville Bamboo Co below!
            </strong>
            &nbsp;
          </Link>
        </div>
      </div>
    </section>
  );
}

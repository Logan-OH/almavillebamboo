import { string, arrayOf, oneOfType, node } from "prop-types";
import classnames from "classnames";
// components
import { Heading, Text } from "../UILib";
// styles
import styles from "./HeroHome.module.scss";

export default function HeroHome({ h1, text, className, children }) {
  const HERO_CSS = classnames({
    [styles.hero]: "default",
    [className]: className,
  });

  return (
    <section className={HERO_CSS}>
      {/* <video
        className={styles.home__video}
        id="background-video"
        autoPlay={true} // eslint-disable-line
        loop
        muted
      >
        <source src="/video/home-hero-vid.mp4" type="video/mp4" />
      </video> */}
      <img
        className={styles.home__video}
        src="/Images/components/HeroHome/bamboo.jpg"
        alt="hero"
      />
      <div className="container">
        {h1 ? (
          <Heading
            type="h1"
            align="center"
            color="white"
            className={styles.home__h1}
          >
            {h1}
          </Heading>
        ) : (
          ""
        )}
        {text ? (
          <Text
            type="p1"
            align="center"
            color="white"
            className={styles.home__text}
          >
            {text}
          </Text>
        ) : (
          ""
        )}
        {children}
      </div>
    </section>
  );
}

HeroHome.propTypes = {
  h1: string,
  text: string,
  className: string,
  children: oneOfType([arrayOf(node), node]),
};

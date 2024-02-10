import { string, oneOf } from "prop-types";
import Link from "next/link";
import classnames from "classnames";
// styles
import styles from "./ButtonLink.module.scss";

export default function ButtonLink({
  href,
  text,
  type,
  rel,
  target,
  className,
}) {
  const btnCss = classnames({
    [styles.btn1]: type === "btn1",
    [styles.btn2]: type === "btn2",
    [styles.btn3]: type === "btn3",
    [className]: className,
  });
  return (
    <Link
      href={href}
      className={btnCss}
      // eslint-disable-next-line
      rel={rel ? rel : ""}
      target={target}
      aria-label={text}
    >
      {text}
    </Link>
  );
}

ButtonLink.defaultProps = {
  href: "/",
  text: "change me",
  type: "btn1",
  target: "_self",
};

ButtonLink.propTypes = {
  href: string,
  text: string,
  target: string,
  type: oneOf(["btn1", "btn2"]),
  rel: string,
  className: string,
};

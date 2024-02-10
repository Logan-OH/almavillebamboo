import { string, arrayOf, oneOf, oneOfType, node } from "prop-types";
import classnames from "classnames";
import Link from "next/link";
// styles
import styles from "./UILib.module.scss";

export function Text({ type, align, color, className, children }) {
  const TEXT_CSS = classnames({
    [styles["type-style-p1"]]: type === "p1",
    [styles["type-style-p2"]]: type === "p2",
    [styles["type-style-p3"]]: type === "p3",
    [styles["type-style-p4"]]: type === "p4",
    [styles["type-style-p5"]]: type === "p5",
    [styles["ta-left"]]: align === "left",
    [styles["ta-right"]]: align === "right",
    [styles["ta-center"]]: align === "center",
    [styles["color-style-white"]]: color === "white",
    [styles["color-style-blue"]]: color === "blue",
    [styles["color-style-grey"]]: color === "grey",
    [className]: className,
  });
  return <div className={TEXT_CSS}>{children}</div>;
}

Text.defaultProps = {
  type: "p1",
  color: "grey",
  align: "left",
};

Text.propTypes = {
  type: oneOf(["p1", "p2", "p3", "p4", "p5"]),
  align: oneOf(["left", "right", "center"]),
  color: oneOf(["white", "blue", "grey"]),
  className: string,
  children: oneOfType([arrayOf(node), node]),
};

export function Heading({ type, align, color, className, children }) {
  const HEADING_CSS = classnames({
    [styles["type-style-h1"]]: type === "h1",
    [styles["type-style-h2"]]: type === "h2",
    [styles["type-style-h2-large"]]: type === "h2Large",
    [styles["ta-left"]]: align === "left",
    [styles["ta-right"]]: align === "right",
    [styles["ta-center"]]: align === "center",
    [styles["color-style-white"]]: color === "white",
    [styles["color-style-blue"]]: color === "blue",
    [styles["color-style-grey"]]: color === "grey",
    [className]: className,
  });
  const HEADING_TYPES = {
    h1: <h1 className={HEADING_CSS}>{children}</h1>,
    h2: <h2 className={HEADING_CSS}>{children}</h2>,
    h2Large: <h2 className={HEADING_CSS}>{children}</h2>,
  };
  return HEADING_TYPES[type];
}

Heading.defaultProps = {
  type: "h2",
  color: "blue",
  align: "left",
};

Heading.propTypes = {
  type: oneOf(["h1", "h2", "h2Large"]),
  align: oneOf(["left", "right", "center"]),
  color: oneOf(["white", "blue", "grey"]),
  className: string,
  children: oneOfType([arrayOf(node), node]),
};

export function LinkCustom({
  href,
  type,
  children,
  rel,
  target,
  align,
  color,
  className,
}) {
  // eslint-disable-next-line
  const linkCss = classnames({
    [styles["type-style-link1"]]: type === "link1",
    [styles["type-style-link2"]]: type === "link2",
    [styles["ta-left"]]: align === "left",
    [styles["ta-right"]]: align === "right",
    [styles["ta-center"]]: align === "center",
    [styles["color-style-white"]]: color === "white",
    [styles["color-style-blue"]]: color === "blue",
    [styles["color-style-blue-lighter2"]]: color === "blueLighter",
    [styles["color-style-grey"]]: color === "grey",
    [className]: className,
  });

  return (
    <Link
      href={href}
      className={linkCss}
      rel={rel ? rel : ""} // eslint-disable-line
      target={target}
    >
      {children}
    </Link>
  );
}

LinkCustom.defaultProps = {
  href: "/",
  children: "change me",
  color: "blueLighter",
  type: "link1",
  target: "_self",
};

LinkCustom.propTypes = {
  href: string,
  target: string,
  rel: string,
  type: oneOf(["link1"]),
  align: oneOf(["left", "right", "center"]),
  color: oneOf(["white", "blue", "blueLighter", "grey"]),
  className: string,
  children: oneOfType([arrayOf(node), node]),
};

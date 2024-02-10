import { string, number, bool } from "prop-types";
// components
import { Text } from "../UILib";
// styles
import styles from "./Vial.module.scss";

export default function Vial({
  itemId,
  cc,
  outerDiameter,
  quantity,
  clearVialImage,
  amberVialImage,
  fluroTech,
}) {
  const handleImgToggle = (event) => {
    const { target } = event;
    // toggle the bottle images based
    // on the radio data attribute
    if (target.dataset.bottle === "clear") {
      document.querySelector(`#${itemId}-clear`).classList.remove("d-none");
      document.querySelector(`#${itemId}-amber`).classList.add("d-none");
    } else {
      document.querySelector(`#${itemId}-clear`).classList.add("d-none");
      document.querySelector(`#${itemId}-amber`).classList.remove("d-none");
    }

    // get the radios for this itemId
    const radios = document.querySelectorAll(`input[data-item="${itemId}"]`);

    // reset both radios
    radios.forEach((radio) => {
      radio.checked = false; // eslint-disable-line
    });

    // add check to click target
    event.target.checked = true; // eslint-disable-line
  };

  return (
    <section className={styles.vial}>
      {/* toggle badge */}
      {fluroTech ? (
        <img
          className={styles.vial__badge}
          src="/Images/pages/our-product/FluroTec-badge.svg"
          alt="FluroTech badge"
        />
      ) : (
        ""
      )}

      {clearVialImage ? (
        <img
          id={`${itemId}-clear`}
          className={styles.vial__vialimg}
          src={clearVialImage}
          alt={itemId}
        />
      ) : (
        ""
      )}
      {amberVialImage ? (
        <img
          className={`d-none ${styles.vial__vialimg}`}
          id={`${itemId}-amber`}
          src={amberVialImage}
          alt={itemId}
        />
      ) : (
        ""
      )}

      <Text align="center" type="p2" className={styles.vial__description}>
        <strong className={styles.vial__id}>Item #{itemId}</strong>
        <br />
        {cc} cc <br />
        Outer diameter:&nbsp;{outerDiameter}
        <br />
        Quantity:&nbsp;{quantity}
      </Text>

      <form className={styles.vial__radios}>
        <div>
          <input
            className={styles.vial__radio}
            id={`clear-${itemId}`}
            name="clear"
            type="radio"
            data-bottle="clear"
            data-item={itemId}
            onClick={(event) => handleImgToggle(event)}
            defaultChecked
            // disable if there isn't an amber vial
            disabled={amberVialImage ? false : true} // eslint-disable-line
          />
          {/* eslint-disable-next-line */}
          <label className={styles.vial__label} htmlFor={`clear-${itemId}`}>
            Clear
          </label>
        </div>
        {amberVialImage ? (
          <div>
            <input
              className={`${styles.vial__radio} ${styles.vial__radioAmber}`}
              id={`amber-${itemId}`}
              name="amber"
              type="radio"
              data-bottle="amber"
              data-item={itemId}
              onClick={(event) => handleImgToggle(event)}
            />
            {/* eslint-disable-next-line */}
            <label className={styles.vial__label} htmlFor={`amber-${itemId}`}>
              Amber
            </label>
          </div>
        ) : (
          ""
        )}
      </form>
    </section>
  );
}

Vial.propTypes = {
  itemId: string,
  cc: number,
  outerDiameter: string,
  quantity: number,
  clearVialImage: string,
  amberVialImage: string,
  fluroTech: bool,
};

export function VialFrench({
  itemId,
  cc,
  outerDiameter,
  quantity,
  clearVialImage,
  amberVialImage,
  fluroTech,
}) {
  const handleImgToggle = (event) => {
    const { target } = event;
    // toggle the bottle images based
    // on the radio data attribute
    if (target.dataset.bottle === "clear") {
      document.querySelector(`#${itemId}-clear`).classList.remove("d-none");
      document.querySelector(`#${itemId}-amber`).classList.add("d-none");
    } else {
      document.querySelector(`#${itemId}-clear`).classList.add("d-none");
      document.querySelector(`#${itemId}-amber`).classList.remove("d-none");
    }

    // get the radios for this itemId
    const radios = document.querySelectorAll(`input[data-item="${itemId}"]`);

    // reset both radios
    radios.forEach((radio) => {
      radio.checked = false; // eslint-disable-line
    });

    // add check to click target
    event.target.checked = true; // eslint-disable-line
  };

  return (
    <section className={styles.vial}>
      {/* toggle badge */}
      {fluroTech ? (
        <img
          className={styles.vial__badge}
          src="/Images/pages/our-product/FluroTec-badge.svg"
          alt="FluroTech badge"
        />
      ) : (
        ""
      )}

      {clearVialImage ? (
        <img
          id={`${itemId}-clear`}
          className={styles.vial__vialimg}
          src={clearVialImage}
          alt={itemId}
        />
      ) : (
        ""
      )}
      {amberVialImage ? (
        <img
          className={`d-none ${styles.vial__vialimg}`}
          id={`${itemId}-amber`}
          src={amberVialImage}
          alt={itemId}
        />
      ) : (
        ""
      )}

      <Text align="center" type="p2" className={styles.vial__description}>
        <strong className={styles.vial__id}>
          Article n<sup>o</sup> {itemId}
        </strong>
        <br />
        {cc} cc <br />
        Diamètre extérieur&nbsp;:&nbsp;{outerDiameter}
        <br />
        Quantité&nbsp;:&nbsp;{quantity}
      </Text>

      <form className={styles.vial__radios}>
        <div>
          <input
            className={styles.vial__radio}
            id={`clear-${itemId}`}
            name="clear"
            type="radio"
            data-bottle="clear"
            data-item={itemId}
            onClick={(event) => handleImgToggle(event)}
            defaultChecked
            // disable if there isn't an amber vial
            disabled={amberVialImage ? false : true} // eslint-disable-line
          />
          {/* eslint-disable-next-line */}
          <label className={styles.vial__label} htmlFor={`clear-${itemId}`}>
            Clair
          </label>
        </div>
        {amberVialImage ? (
          <div>
            <input
              className={`${styles.vial__radio} ${styles.vial__radioAmber}`}
              id={`amber-${itemId}`}
              name="amber"
              type="radio"
              data-bottle="amber"
              data-item={itemId}
              onClick={(event) => handleImgToggle(event)}
            />
            {/* eslint-disable-next-line */}
            <label className={styles.vial__label} htmlFor={`amber-${itemId}`}>
              Ambré
            </label>
          </div>
        ) : (
          ""
        )}
      </form>
    </section>
  );
}

VialFrench.propTypes = {
  itemId: string,
  cc: number,
  outerDiameter: string,
  quantity: number,
  clearVialImage: string,
  amberVialImage: string,
  fluroTech: bool,
};

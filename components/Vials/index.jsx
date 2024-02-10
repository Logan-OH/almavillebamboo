// components
import Vial, { VialFrench } from "../Vial";
// data
import { vials } from "./vialsMap";

export default function Vials() {
  return (
    <>
      {/* map over the  vials and create a div for each */}
      {vials.map((vial) => (
        <Vial
          key={vial.itemId}
          itemId={vial.itemId}
          cc={vial.cc}
          outerDiameter={vial.outerDiameter}
          quantity={vial.quantity}
          clearVialImage={vial.imgClear}
          amberVialImage={vial.imgAmber}
          fluroTech={vial.fluroTec}
        />
      ))}
    </>
  );
}

export function VialsFrench() {
  return (
    <>
      {/* map over the  vials and create a div for each */}
      {vials.map((vial) => (
        <VialFrench
          key={vial.itemId}
          itemId={vial.itemId}
          cc={vial.cc}
          outerDiameter={vial.outerDiameter}
          quantity={vial.quantity}
          clearVialImage={vial.imgClear}
          amberVialImage={vial.imgAmber}
          fluroTech={vial.fluroTec}
        />
      ))}
    </>
  );
}

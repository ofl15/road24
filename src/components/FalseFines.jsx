import React from "react";
import Fine from "./Fine";

export default function Fines({ fines }) {
  return (
    <div style={{ overflow: "scroll", height: "618px" }}>
      {fines &&
        fines.map(
          (fine) =>
            fine.attributes.is_payment === false && (
              <div key={fine.id}>
                <Fine
                  id={fine.id}
                  modda={fine.attributes.modda}
                  summa={fine.attributes.summa}
                  tavsif={fine.attributes.Tavsif}
                  address={fine.attributes.address}
                  date={fine.attributes.date}
                  random={fine.attributes.idnum}
                />
              </div>
            )
        )}
    </div>
  );
}
import { IonRow } from "@ionic/react";
import React from "react";
import "./style.css";
function Loader() {
  return (
    <IonRow className="full ion-justify-content-center ion-align-items-center">
      <div className="loader"></div>
    </IonRow>
  );
}

export default Loader;

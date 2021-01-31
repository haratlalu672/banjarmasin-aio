import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Style.css";
import Loader from "../../components/Loader";
import useAxiosGet from "../../hooks/BeritaRequest";
import News from "../../components/News";
// import News from "../../components/News";

const Berita: React.FC = () => {
  const url =
    "https://600f70b06c21e1001704eb50.mockapi.io/api/v1/berita?page=1&limit=10";

  let habar = useAxiosGet(url);
  console.log(habar.data);
  let content = null;
  if (habar.error) {
    content = <p>Ada kesalahan, silahkan coba lagi</p>;
  }

  if (habar.data) {
    content = <div>ada data</div>;
  }

  let contoh: any = [];

  for (let index = 0; index < 5; index++) {
    contoh.push(
      <IonCard>
        <IonImg src="http://placekitten.com/g/600/300" />
        <IonCardHeader>
          <IonCardTitle></IonCardTitle>
          <IonCardSubtitle>Destination</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
          Madison was named the capital of the Wisconsin Territory in 1836.
        </IonCardContent>
      </IonCard>
    );
  }

  const number: any = ["satu", "dua", "tiga"];
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Habar Terkini</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{contoh}</IonContent>
    </IonPage>
  );
};

export default Berita;

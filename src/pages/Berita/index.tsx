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
import useAxiosGet from "../../hooks/HttpRequest";
import Loader from "../../components/Loader";
// import News from "../../components/News";

const Berita: React.FC = () => {
  const url = "https://the-lazy-media-api.vercel.app/api/games/e-sport/?page=1";
  let habar = useAxiosGet(url);
  // console.log(habar.data);
  let content: any = [];
  let data: any = habar.data;
  console.log(data);
  if (habar.error) {
    content = <p>Ada kesalahan, silahkan coba lagi</p>;
  }
  if (habar.loading) {
    content = <Loader />;
  }
  if (data) {
    for (let index = 0; index < data.result.length; index++) {
      content.push(
        <IonCard key={index}>
          <IonImg src={data.result[index].thumb} />
          <IonCardHeader>
            <IonCardTitle>{data.result[index].title}</IonCardTitle>
            <IonCardSubtitle>{data.result[index].time}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{data.result[index].desc}</IonCardContent>
        </IonCard>
      );
    }
  }

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Habar Terkini</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{content}</IonContent>
    </IonPage>
  );
};

export default Berita;

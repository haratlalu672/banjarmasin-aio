import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonProgressBar,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Style.css";
import {
  logoApple,
  logoFacebook,
  logoGoogle,
  logoHtml5,
  logoInstagram,
  logoIonic,
  logoJavascript,
  logoLaravel,
  logoReact,
  logoTiktok,
  logoTumblr,
  logoVue,
  logoWhatsapp,
} from "ionicons/icons";

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [
  { src: "http://placekitten.com/g/600/300", text: "a picture of a cat" },
];

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

let event: any = [];

for (let index = 0; index < 5; index++) {
  event.push(
    <IonSlide>
      <IonCard>
        <IonCardHeader>
          <IonImg src="https://i.ibb.co/jD8ypLq/files.jpg" className="files" />
        </IonCardHeader>
        <IonCardContent className="ion-text-left">
          <IonCardTitle className="ion-margin-bottom">
            Judul {index + 1}
          </IonCardTitle>
          <IonCardSubtitle>31 Januari 2021</IonCardSubtitle>
        </IonCardContent>
      </IonCard>
    </IonSlide>
  );
}

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Banjarmasin AIO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Banjarmasin AIO</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonImg src="http://placekitten.com/g/600/300" />
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="3">
                  <IonIcon icon={logoHtml5} color="warning" size="large" />
                  <IonText className="ion-text-center">HTML</IonText>
                </IonCol>
                <IonCol size="3">
                  <IonIcon icon={logoVue} color="success" size="large" />
                  <IonText>VueJS</IonText>
                </IonCol>
                <IonCol size="3">
                  <IonIcon icon={logoLaravel} color="danger" size="large" />
                  <IonText>Laravel</IonText>
                </IonCol>
                <IonCol size="3">
                  <IonIcon icon={logoReact} color="primary" size="large" />
                  <IonText>React</IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonIcon icon={logoApple} color="medium" size="large" />
                  <IonText>Apple</IonText>
                </IonCol>
                <IonCol>
                  <IonIcon icon={logoTumblr} color="secondary" size="large" />
                  <IonText>Tumblr</IonText>
                </IonCol>
                <IonCol>
                  <IonIcon icon={logoTiktok} color="dark" size="large" />
                  <IonText>Tiktok</IonText>
                </IonCol>
                <IonCol>
                  <IonIcon icon={logoIonic} color="tertiary" size="large" />
                  <IonText>Ionic</IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonTitle className="ion-margin-top" color="light">
          Berita
        </IonTitle>
        <IonSlides pager={true} options={slideOpts}>
          {event}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;

import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "./Style.css";
import {
  helpOutline,
  list,
  lockClosedOutline,
  moon,
  star,
} from "ionicons/icons";

const Akun: React.FC = () => {
  const toggleDarkModeHandler = () => document.body.classList.toggle("dark");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Akun</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Akun</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="coba">
          {/* <IonCard>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://www.sohocapitalmedan.com/images/sohocapitalmedan_00index/default.jpg" />
              </IonAvatar>
              <IonLabel>
                <h3 className="bold">Nama</h3>
                <p>Email</p>
              </IonLabel>
              <IonIcon icon={createOutline} />
            </IonItem>
            <IonButton className="ion-float-right" size="small">
              Logout
            </IonButton>
          </IonCard> */}
          <IonCard>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://www.sohocapitalmedan.com/images/sohocapitalmedan_00index/default.jpg" />
              </IonAvatar>
              <IonLabel>
                <h3>Anda belum login</h3>
              </IonLabel>
            </IonItem>
            <IonButton
              className="ion-float-right"
              size="small"
              color="tertiary"
              routerLink="/registrasi"
            >
              Register
            </IonButton>
            <IonButton
              className="ion-float-right"
              size="small"
              routerLink="/login"
            >
              Login
            </IonButton>
          </IonCard>
          <IonCard>
            <IonList className="ion-margin-top">
              <IonItem>
                <IonIcon slot="start" icon={moon} />
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle
                  slot="end"
                  name="darkMode"
                  onIonChange={toggleDarkModeHandler}
                />
              </IonItem>
            </IonList>
            <IonItem>
              <IonAvatar slot="start">
                <IonIcon icon={lockClosedOutline} size="large" />
              </IonAvatar>
              <IonLabel>Privacy & Policy</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonIcon icon={star} size="large" />
              </IonAvatar>
              <IonLabel>Rating</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonIcon icon={list} size="large" />
              </IonAvatar>
              <IonLabel>Syarat & Ketentuan</IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonIcon icon={helpOutline} size="large" />
              </IonAvatar>
              <IonLabel>Tentang Aplikasi</IonLabel>
            </IonItem>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Akun;

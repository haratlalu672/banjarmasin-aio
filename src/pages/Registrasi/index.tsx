import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Style.css";

// const [text, setText] = useState<string>();

let email: any = localStorage.getItem("google-auth");

const Registrasi: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle className="ion-text-center">Registrasi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          {/* <img src="./madison.jpg" /> */}
          <IonCardHeader>
            <IonCardTitle></IonCardTitle>
            <IonCardSubtitle className="ion-text-center">
              Silahkan diisi data dengan Benar. <br />
              <IonText color="danger" className="ion-margin">
                Diverifikasi maksimal 1x24 jam.
              </IonText>
            </IonCardSubtitle>
          </IonCardHeader>
          <IonItemDivider />
          <IonCardContent>
            <IonLabel>NIK</IonLabel>
            <IonItem className="ion-margin-bottom">
              <IonInput
                // value={text}
                placeholder="Masukkan NIK Anda"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonLabel>Email</IonLabel>
            <IonItem className="ion-margin-bottom">
              <IonInput
                value={email}
                placeholder="Masukkan Email Anda"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonLabel>Nama</IonLabel>
            <IonItem className="ion-margin-bottom">
              <IonInput
                // value={text}
                placeholder="Nama"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonLabel>Telepon</IonLabel>
            <IonItem className="ion-margin-bottom">
              <IonInput
                // value={text}
                placeholder="Telepon"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonLabel>Password</IonLabel>
            <IonItem className="ion-margin-bottom">
              <IonInput
                // value={text}
                placeholder="Password"
                type="password"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonLabel>Konfirmasi Password</IonLabel>
            <IonItem className="ion-margin-bottom">
              <IonInput
                // value={text}
                placeholder="Konfirmasi Password"
                type="password"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonButton expand="block" color="primary">
              Registrasi
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Registrasi;

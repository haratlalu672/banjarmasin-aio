import React, { useEffect, useRef, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonPage,
  IonRedirect,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Style.css";
import { logoGoogle } from "ionicons/icons";
import { Plugins } from "@capacitor/core";

// const [text, setText] = useState<string>();

const API_URL = "http://localhost:12321";
let userInfo: any = null;
// async function parseAndAttemptLogin(response: any, provider: "google") {
//   const res = await fetch(API_URL + "/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application-json",
//     },
//     body: JSON.stringify({
//       provider,
//       response,
//     }),
//   }).then((res) => res.json());
//   console.log("Result is ", res);

//   let isSuccess: boolean = res.status == "ok";

//   return isSuccess;
// }
const Login: React.FC = () => {
  async function signIn() {
    const googleUser: any = await Plugins.GoogleAuth.signIn();

    let { email } = googleUser;
    console.log("Google Login", googleUser);
    localStorage.setItem("google-auth", email);
    window.location.replace("http://localhost:8100/registrasi");
    // await parseAndAttemptLogin(googleUser, "google").then(() =>
    //   window.location.replace("http://localhost:8100/registrasi")
    // );
  }

  const password: any = useRef();
  const changetype = () => {
    password.current.type = "password";
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonImg src="https://cf.shopee.co.id/file/1b1f2baddc8bb4c47e4c71cc0b3d861d" />
          <IonCardHeader>
            <IonCardTitle></IonCardTitle>
            <IonCardSubtitle className="ion-text-center">
              Selamat Datang di Aplikasi Banjarmasin AIO
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonInput
                // value={text}
                placeholder="Username/NIK"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                // value={text}
                placeholder="Password"
                type="password"
                // onIonChange={(e) => setText(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonButton
              expand="block"
              color="primary"
              className="ion-margin-top"
            >
              Login
            </IonButton>
            <div className="ion-text-center">Atau</div>
            <IonButton onClick={signIn} expand="block" color="danger">
              <IonIcon slot="start" icon={logoGoogle} />
              Login dengan GMAIL
            </IonButton>
          </IonCardContent>
          {userInfo}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;

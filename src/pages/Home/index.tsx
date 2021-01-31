import React from "react";
import {
  IonAvatar,
  IonButton,
  IonButtons,
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
  IonPage,
  IonProgressBar,
  IonRow,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Style.css";
import {
  apps,
  documentOutline,
  ellipsisVertical,
  filmOutline,
  notifications,
  square,
} from "ionicons/icons";

const slideOptions = {
  initialSlide: 1,
  speed: 400,
  autoplay: 1000,
  loop: true,
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={apps}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton className="bordered" fill="solid" color="light">
              <IonIcon color="custom" icon={notifications}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonItem lines="none">
          <IonAvatar slot="start">
            <IonImg src="https://habib.al-mawali.com/wp-content/uploads/IMG_4838-1-768x768.jpg"></IonImg>
          </IonAvatar>
          <IonLabel>
            <p>Selamat datang,</p>
            <h3>Ardi Ramadani Zarqoni</h3>
          </IonLabel>
        </IonItem>
      </IonHeader>
      <IonContent>
        <div className="slides ion-margin-bottom">
          <IonSlides options={slideOptions}>
            <IonSlide>
              <IonCard>
                <IonCardHeader>
                  <div className="main">
                    <IonImg
                      src="https://cfl.dropboxstatic.com/static/images/logo_catalog/twitter-card-glyph_m1%402x.png"
                      className="dropbox"
                    />
                  </div>
                  <IonImg
                    src="https://i.ibb.co/jD8ypLq/files.jpg"
                    className="files"
                  />
                </IonCardHeader>
                <IonCardContent className="ion-text-left">
                  <IonCardTitle className="ion-margin-bottom">
                    Drive
                  </IonCardTitle>
                  <IonCardSubtitle className="ion-text-right">
                    8/50GB
                  </IonCardSubtitle>
                  <IonProgressBar value={0.4} color="custom"></IonProgressBar>
                </IonCardContent>
              </IonCard>
            </IonSlide>
            <IonSlide>
              <IonCard>
                <IonCardHeader>
                  <div className="main">
                    <IonImg src="https://www.freeiconspng.com/uploads/google-drive-icon-18.png" />
                  </div>
                  <IonImg
                    src="https://i.ibb.co/jD8ypLq/files.jpg"
                    className="files"
                  />
                </IonCardHeader>
                <IonCardContent className="ion-text-left">
                  <IonCardTitle className="ion-margin-bottom">
                    Drive
                  </IonCardTitle>
                  <IonCardSubtitle className="ion-text-right">
                    10/50GB
                  </IonCardSubtitle>
                  <IonProgressBar value={0.5} color="warning"></IonProgressBar>
                </IonCardContent>
              </IonCard>
            </IonSlide>
          </IonSlides>
        </div>
        <div className="container">
          <h2 className="ion-text-left">Last file</h2>
          <IonItem lines="none" slot="end">
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="3">
                  <IonButton color="light" fill="clear">
                    <IonIcon icon={documentOutline} slot="icon-only" />
                  </IonButton>
                </IonCol>
                <IonCol size="7">
                  <IonLabel>
                    <h4>Project.PDF</h4>
                    <h6>Google Drive/Docs</h6>
                  </IonLabel>
                </IonCol>
                <IonCol size="2">
                  <IonButton color="light" fill="clear">
                    <IonIcon slot="icon-only" icon={ellipsisVertical} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
          <IonItem lines="none">
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="3">
                  <IonButton color="light" fill="clear">
                    <IonIcon icon={filmOutline} slot="icon-only" />
                  </IonButton>
                </IonCol>
                <IonCol size="7">
                  <IonLabel>
                    <h4>Project.MP4</h4>
                    <h6>Dropbox/Videos</h6>
                  </IonLabel>
                </IonCol>
                <IonCol size="2">
                  <IonButton color="light" fill="clear">
                    <IonIcon slot="icon-only" icon={ellipsisVertical} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

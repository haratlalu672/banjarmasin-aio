import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { homeOutline, newspaperOutline, personOutline } from "ionicons/icons";
import Tab1 from "./pages/Dashboard";
import Tab2 from "./pages/Berita";
import Tab3 from "./pages/Akun";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/berita" component={Tab2} exact={true} />
          <Route path="/dashboard" component={Tab1} exact={true} />
          <Route exact path="/akun" component={Tab3} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrasi" component={Registrasi} />
          <Route
            path="/"
            render={() => <Redirect to="/dashboard" />}
            exact={true}
          />

          {/* <Route
            exact
            path="/login"
            render={() => {
              return isAuth ? <Redirect to="/registrasi" /> : "";
            }}
          /> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="berita" href="/berita">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>Berita</IonLabel>
          </IonTabButton>
          <IonTabButton tab="dashboard" href="/dashboard">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="akun" href="/akun">
            <IonIcon icon={personOutline} />
            <IonLabel>Akun</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

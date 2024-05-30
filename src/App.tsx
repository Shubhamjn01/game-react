import { Refine } from "@pankod/refine-core";
import { notificationProvider, Layout } from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router";
import "@pankod/refine-antd/dist/styles.min.css";
import { customDataProvider } from "utils/customDataProvider";
import { resources } from "resources/resources";
import { authProvider, axios } from "authProvider";

function App() {
  // const PROD_URL = "http://3.104.104.248:5003";
  const PROD_URL = "http://3.106.204.87:5001";
  const DEV_URL = "http://3.106.204.87:5001";
  const API_URL = process.env.NODE_ENV == "development" ? DEV_URL : PROD_URL;

  const dataProvider = customDataProvider(API_URL, axios);
  return (
    <Refine
      routerProvider={routerProvider as any}
      notificationProvider={notificationProvider}
      Layout={Layout}
      dataProvider={dataProvider}
      resources={resources}
      authProvider={authProvider}
    />
  );
}

export default App;

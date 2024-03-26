import { store } from "../states/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { AppProviderInterface } from "@/interfaces";

const persistor = persistStore(store);
const ReduxProviders = ({ children }: AppProviderInterface) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default ReduxProviders;

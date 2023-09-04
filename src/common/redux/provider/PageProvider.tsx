import { ILayout } from "@/common/interfaces";
import { persistor, store } from "..";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/lib/integration/react";

const PageProvider = ({ children }: ILayout): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
export default PageProvider;

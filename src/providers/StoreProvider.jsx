import { Provider } from "react-redux";
import store from "../store/store";

export const StoreProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

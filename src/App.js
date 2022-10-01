import Dom1 from "./view/Dom1";
import Dom2 from "./view/Dom2";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Dom1 />
      <hr></hr>
      <Dom2 />
    </Provider>
  );
}

export default App;

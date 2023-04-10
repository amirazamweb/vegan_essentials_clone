import AppContainer from "./AppContainer";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/appRedux";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

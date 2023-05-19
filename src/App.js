import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import FoodProvider from "./Context/FoodProvider";
import { Provider } from "react-redux";
import store from "./State/store";

function App() {
  return (
    <FoodProvider>
      <Provider store={store}>
        <Header></Header>
        <Main></Main>
      </Provider>
    </FoodProvider>
  );
}

export default App;

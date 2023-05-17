import { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import FoodProvider from "./Context/FoodProvider";


function App() {  
  return (
    <FoodProvider>
      <Header></Header>
      <Main></Main>
    </FoodProvider>
  );
}

export default App;
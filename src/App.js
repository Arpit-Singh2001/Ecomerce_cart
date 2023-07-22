import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
        <Route path="/carts/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { LayoutMain } from "./layouts/LayoutMain";
import { HomeAdmin, OrdersAdmin, GoodsAdmin, PromoAdmin } from "./pages/admin/";
import { TshirtsPage } from "./pages/TshirtsPage";
import { Home } from "./pages/Home";
import { DesignerClothing } from "./pages/DesignerClothing";
import { SingleTshirtPage } from "./pages/SingleItemPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="tshirts" element={<TshirtsPage />} />
          <Route path="tshirts/:id" element={<SingleTshirtPage />} />
          <Route path="designer-clothing" element={<DesignerClothing />} />
          <Route path="designer-clothing/:id" element={<SingleTshirtPage />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="orders" element={<OrdersAdmin />} />
          <Route path="goods" element={<GoodsAdmin />} />
          <Route path="promo" element={<PromoAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { LayoutMain } from "./layouts/LayoutMain";
import { HomeAdmin, OrdersAdmin, GoodsAdmin, PromoAdmin } from "./pages/admin/";
import { TshirtsPage } from "./pages/TshirtsPage";
import { Home } from "./pages/Home";
import { DesignerClothing } from "./pages/DesignerClothing";
import { SingleItemPage } from "./pages/SingleItemPage";
import { BasketPage } from "./pages/BasketPage";
import { ProfilePage } from "./pages/ProfilePage";
import GreetingPage from "./pages/profile/GreetingPage";
import { OrdersPage } from "./pages/profile/OrdersPage";
import FavoritePage from "./pages/profile/FavoritePage";
import AddressPage from "./pages/profile/AddressPage";
import EditPage from "./pages/profile/EditPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route index element={<GreetingPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="address" element={<AddressPage />} />
            <Route path="edit" element={<EditPage />} />
          </Route>
          <Route path="tshirts" element={<TshirtsPage />} />
          <Route path="tshirts/:id" element={<SingleItemPage />} />
          <Route path="designer-clothes" element={<DesignerClothing />} />
          <Route path="designer-clothes/:id" element={<SingleItemPage />} />
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

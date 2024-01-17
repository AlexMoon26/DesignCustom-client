
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

import { LayoutAdmin } from './components/LayoutAdmin/LayoutAdmin'
import { HomeAdmin, OrdersAdmin, GoodsAdmin, PromoAdmin } from './pages/admin/'



function App() {

  return (

    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path='orders' element={<OrdersAdmin />} />
          <Route path='goods' element={<GoodsAdmin />} />
          <Route path='promo' element={<PromoAdmin />} />
        </Route>
      </Routes>

    </div>

  )
}

export default App

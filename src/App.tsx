import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import AllCompanies from './pages/AllCompanies'
import AllBrands from './pages/AllBrands'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/brands" element={<AllBrands />} />
      <Route path="/companies" element={<AllCompanies />} />
    </Routes>
  )
}

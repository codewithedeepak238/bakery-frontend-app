import { Route, Routes } from "react-router-dom"
import { Home, ProductList, ProductPage, LogIn, SignUp, CartPage } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/products/:id" element={<ProductPage/>}/>
            <Route path="/log-in" element={<LogIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/cart" element={<ProtectedRoutes>{<CartPage/>}</ProtectedRoutes>} />
        </Routes>
    </>
  )
}

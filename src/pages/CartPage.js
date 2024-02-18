import { CartEmpty, CartFull } from "../components";
import { useCart } from "../context/CartContext";

export const CartPage = () => {
  const {cartList} = useCart();
  
  return (
    <section className="min-h-[50vh] mt-[2%]">
        <div className="mx-auto">
            {
              cartList.length>0? <CartFull cartList={cartList}/>:<CartEmpty/>
            }
        </div>
    </section>
  )
}

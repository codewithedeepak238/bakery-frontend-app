import { CartProduct } from "../elements/CartProduct"

export const CartFull = ({cartList}) => {
    
  return (
    <div className='mx-auto w-[50%]'>
        <div>
            {
                cartList && cartList.map((order)=>(<CartProduct key={order.id} order={order}/>))
            }
        </div>
        <div className="flex justify-center">
            <button className="bg-amber-700 text-white text-xl py-[1%] px-[5%]">Checkout</button>
        </div>
    </div>
  )
}

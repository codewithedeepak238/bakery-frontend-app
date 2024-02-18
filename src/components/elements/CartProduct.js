import { useCart } from "../../context/CartContext"

export const CartProduct = ({order}) => {
    const {removeCart} = useCart();

    function handleRemove(order){
        const detail = {
            id:order.id,
            price: order.quantity*order.originalPrice,
        }
        removeCart(detail);
    }

  return (
    <div className="flex gap-[2rem] mb-[2%] bg-slate-100">
        <div className="w-[150px] h-[120px] w-[25%]">
            <img className="object-center object-cover w-full h-full" src={order.poster} alt={order.name} />
        </div>
        <div className="pt-[2%] flex w-[75%]">
            <div className="w-[70%]">
                <p className="text-xl">{order.name}</p>
                <p className="text-l text-amber-700 font-semibold">₹{order.originalPrice}</p>
                <p>Qty: {order.quantity}</p>
            </div>
            <div className="w-[30%]">
                <button onClick={()=>handleRemove(order)} className="mt-[10%] px-[5%] py-[2%] bg-amber-700 text-white rounded text-sm">Remove item</button>
            </div>
        </div>
    </div>
  )
}

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"
import visa from  "../assets/visa.png";
import rupay from "../assets/rupay.png";
import razor from "../assets/razor.png";
import master from "../assets/mastercard.png";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
    const {cartList, clearCart} = useCart();
    const [totalPrice, setPrice] = useState(0);
    useEffect(()=>{
        let price = 0;
        cartList.forEach((item)=>{
            price = price+item.price;
        })
        setPrice(price);
    }, [])
    const navigate = useNavigate()
    function handleClick(){
        clearCart();
        navigate("/checkout/order")
    }

  return (
    <div className="flex items-center justify-center">
        <div className="w-[500px] bg-gray-100 rounded-[10px] text-center py-[2%] px-[5%]">
            <p className="text-[25px] font-[600] mb-[5%]">CHECKOUT</p>
            <div className="">
                <p className="flex justify-between border-b-[1px] border-gray-300 py-[2%]">Sutotal <span>Rs. {totalPrice}</span></p>
                <p className="flex justify-between border-b-[1px] border-gray-300 py-[2%]">Shipping <span>Rs. 299</span></p>
                <p className="flex justify-between border-b-[1px] border-gray-300 pt-[2%] pb-[10%]">Total <span className="font-[600]">Rs. ${totalPrice+299}</span></p>
            </div>
            <div className="mt-[10%]">
                <input type="text" className="w-[100%] p-[1%] border-[1px] border-gray-300 bg-transparent tracking-[10px] text-center mb-[2%]" value="514623665789"/>
                <p className="flex gap-[10px]"><input type="text" className="w-[30%] p-[1%] border-[1px] border-gray-300 bg-transparent tracking-[10px] text-center" value="539"/><input type="text" className="w-[30%] p-[1%] border-[1px] border-gray-300 bg-transparent tracking-[10px] text-center" value="03/28"/></p>
                <div className="flex gap-[10px] mt-[5%] items-center justify-center">
                    <img className="w-[50px]" src={rupay} alt="" />
                    <img className="w-[50px]" src={visa} alt="" />
                    <img className="w-[50px]" src={master} alt="" />
                </div>
                <p className="my-[5%]">-OR-</p>
                <div>
                    <div className="flex justify-center bg-amber-400 rounded-[20px] py-[2%]">
                        <img className="w-[35%]" src={razor} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-[20%]">
                <button onClick={handleClick} className="bg-blue-500 w-[100%] rounded-[20px] py-[2%] text-white">PLACE ORDER</button>
            </div>

        </div>
    </div>
  )
}

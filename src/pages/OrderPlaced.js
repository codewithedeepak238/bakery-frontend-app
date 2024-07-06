import checkout from "../assets/checkout.png"
import { useNavigate } from "react-router-dom"

export const OrderPlaced = () => {
    const navigate = useNavigate()
    function handleClick(){
        navigate("/")
    }
  return (
    <div className="flex items-center justify-center">
        <div className="w-[500px] flex flex-col justify-center items-center bg-gray-100 rounded-[10px] text-center py-[2%] px-[5%]">
            <img src={checkout} className="w-[30%]" alt="" />
            <p className="mt-[5%] text-4xl">Thank You!</p>
            <p className="mt-[5%] text-2xl">Order Placed</p>
            <p className="mt-[5%]">Order Refference Id: <span className="text-blue-500">BKRYAP897123</span></p>
            <button onClick={handleClick} className="w-[100%] bg-amber-400 px-[5%] rounded-[20px] mt-[5%]">Back to Home</button>
        </div>
    </div>
  )
}

import { Link } from "react-router-dom"

export const CartEmpty = () => {
  return (
    <div className="w-[50%] mx-auto h-[50vh] bg-slate-100 p-[5%]">
        <div className="text-center">
            <i class="bi bi-cart-check-fill text-8xl"></i>
        </div>
        <div className="text-center flex flex-col items-center">
            <p className="mt-[5%]">Your cart looks empty...</p>
            <p className="text-xl">Let's eat something...</p>
            <Link to='/' className="bg-amber-700 w-[100px] py-[5px] rounded-lg mt-[2%] shadow text-white">Home</Link>
        </div>
    </div>
  )
}

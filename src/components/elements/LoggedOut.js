import { Link } from "react-router-dom"

export const LoggedOut = () => {
  return (
    <div className="relative flex flex-col justify-between w-[150px] min-h-[150px]">
        <div className="w-[10px] z-[-1] h-[10px] rotate-45 bg-amber-700 absolute top-[-3%] right-[15%]">

        </div>
        <div className="overflow-hidden rounded-lg bg-amber-700">
        <div className="flex flex-col">
            <Link to="/log-in" className="py-[5px] pl-[20px] hover:bg-amber-800 cursor-pointer text-white">My Order</Link>
            <Link to="/log-in" className="py-[5px] pl-[20px] hover:bg-amber-800 cursor-pointer text-white border-b-[1px] border-amber-900">My Cart</Link>
        </div>
        <div className="flex flex-col">
            <Link to="/log-in" className="py-[5px] w-full pl-[20px] hover:bg-amber-800 cursor-pointer text-white">Log In</Link>
            <Link to="/sign-up" className="py-[5px] w-full pl-[20px] hover:bg-amber-800 cursor-pointer text-white">Sign Up</Link>
        </div>
        </div>
    </div>
  )
}

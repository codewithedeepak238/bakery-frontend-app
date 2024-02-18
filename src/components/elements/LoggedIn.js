import { Link, useNavigate } from "react-router-dom";

export const LoggedIn = () => {
  const navigate = useNavigate();
  const name = JSON.parse(sessionStorage.getItem("name"))
  const email = JSON.parse(sessionStorage.getItem("email"))
  console.log(name, email);
  function handleLogout(){
    sessionStorage.clear();
    navigate('/log-in')
  }
  return (
    <div className="relative flex flex-col justify-between w-[150px] min-h-[150px]">
        <div className="w-[10px] z-[-1] h-[10px] rotate-45 bg-amber-700 absolute top-[-3%] right-[15%]">

        </div>
        <div className="overflow-hidden rounded-lg bg-amber-700">
        <div>
            {
              name && <p className="pt-[2px] pl-[20px] text-white">{name}</p>
            }
            {
              email && <p className="pl-[20px] text-white">{email}</p>
            }
        </div>
        <div className="flex flex-col">
            <Link className="py-[5px] pl-[20px] hover:bg-amber-800 cursor-pointer text-white">My Order</Link>
            <Link to={'/cart'} className="py-[5px] pl-[20px] hover:bg-amber-800 cursor-pointer text-white border-b-[1px] border-amber-900">My Cart</Link>
        </div>
        <div>
            <p onClick={handleLogout} className="py-[5px] pl-[20px] hover:bg-amber-800 cursor-pointer text-white">Log Out</p>
        </div>
        </div>
    </div>
  )
}

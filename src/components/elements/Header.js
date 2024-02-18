import { Link, NavLink, json } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { LoggedIn } from "./LoggedIn";
import { LoggedOut } from "./LoggedOut";
import logo from "../../assets/logo.png";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const [show, setShow] = useState(false);
  const {total} = useCart();
  const wrapRef = useRef();
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(()=>{
    function outSideClick(event){
        if(wrapRef.current && !wrapRef.current.contains(event.target)){
            setShow(false);
        }
    }
    document.addEventListener("mousedown", outSideClick);
    return ()=>{
        document.removeEventListener("mousedown", outSideClick)
    }
  }, [wrapRef]);

  return (
    <section className="py-[0.25rem]">
      <div className="md:flex items-center justify-between">
        <div>
          <NavLink to={"/"}><img className="w-[100px] md:w-[140px]" src={logo} /></NavLink>
        </div>
        <div className="text-m font-semibold flex relative">
          <NavLink className="mx-[10px]" to={"/"}>HOME</NavLink>
          <NavLink className="mx-[10px]" to={"/products"}>PRODUCTS</NavLink>
          <p className="mx-[10px] cursor-pointer" to={"/"}>CATEGORIES</p>
          <p ref={wrapRef} onClick={()=>setShow(!show)} className="mx-[10px] cursor-pointer" to={"/"}>
            MY ACCOUNT
            <div className={`${show?"": "hidden"} absolute right-0 top-[25px] z-50`}>
              {token?<LoggedIn/>:<LoggedOut/>}
            </div>
          </p>
        </div>
        <div className="w-[135px]">
          <Link to="/cart" className="flex items-center"><i className="bi bi-bag-heart-fill mr-1"></i><span className="">Item: <span><i class="bi bi-currency-rupee"></i>{`${total}.00`}</span></span></Link>
        </div>
      </div>
    </section>
  )
}

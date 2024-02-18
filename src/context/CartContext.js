import { useContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";
import { createContext } from "react";

const cartList = JSON.parse(sessionStorage.getItem('cartList'));
const total = JSON.parse(sessionStorage.getItem('total'));

const InitialCart = {
    cartList : cartList? cartList:[],
    total: total? total:0
}

const CartContext = createContext(InitialCart);

export const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer(CartReducer, InitialCart);

    function addTocart(product){
        const updateList = state.cartList.concat(product);
        const total = state.total + product.price;
        sessionStorage.setItem("cartList", JSON.stringify(updateList))
        sessionStorage.setItem("total", JSON.stringify(total))

        dispatch({
            type: "ADD_CART",
            payload:{
                cartList: updateList,
                total: total
            }
         })
    }

    function removeCart(product){
        const updateList = state.cartList.filter((item)=>item.id!==product.id);
        const total = state.total - product.price;
        sessionStorage.removeItem("cartList")
        sessionStorage.removeItem("total")

        dispatch({
            type: "REMOVE_CART",
            payload: {
                cartList: updateList,
                total: total
            }
         })
    }
    function clearCart(){
        dispatch({
            type: "CLEAR_CART"
        })
    }
    const value = {
        addTocart,
        removeCart,
        clearCart,
        cartList: state.cartList,
        total: state.total
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>useContext(CartContext);
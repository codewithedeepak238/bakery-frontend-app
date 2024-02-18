import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const CardCart = ({product}) => {
    const {addTocart, removeCart, cartList} = useCart();
    const [value, setValue] = useState(1);
    const [add, setAdd] = useState(false);
    const navigate = useNavigate();
    function handleIncr(){
        if(value>=1 && value<10){
            setValue(()=>value+1);
        }
    }
    function handleDecr(){
        if(value>1 && value<=10)
        setValue(()=>value-1);
    }
    function handleProduct(id){
        let newUrl = id?`/products/${id}`:"";
        navigate(newUrl);
    }
    function handleAdd(product){
            const detail = {
                id:product.id,
                name:product.name,
                poster:product.poster,
                originalPrice: product.price,
                price: value*product.price,
                quantity: value
            }
            addTocart(detail);
            setAdd(!add)
        }
            
        function handleRemove(product){
            const newItem = cartList.find(item=>item.id === product.id)
            const detail = {
                id: newItem.id,
                price: newItem.price
            }
            removeCart(detail);
        }
    useEffect(()=>{
        const value = cartList.find(item=>item.id == product.id);
        if(value){
            setAdd(true);
        }else{
            setAdd(false);
        }
    }, [cartList])

    
    return (
      <>
          {
              product &&
              <div className="shadow-md overflow-hidden">
                <div className="overflow-hidden">
                    <img onClick={()=>handleProduct(product.id)} className="cursor-pointer transition-transform duration-300 w-[220px] h-[200px] hover:scale-125 object-center object-cover" src={product.poster} alt={product.name} />
                </div>
                  <p className="text-center pt-[2%]">{product.name}</p>
                  <div className="px-[10%] py-[3%] flex justify-between font-bold mt-[1%]">
                    <p className="">₹{product.price}</p>
                    <div className="flex items-center justify-between gap-[10px]">
                        <span className="select-none cursor-pointer" onClick={handleIncr}>+</span>
                        <input type="number" readOnly value={value} onChange={(e)=>setValue(e.target.value)} className="text-center border-[1px] w-[40px]" min="1"/>
                        <span className="select-none cursor-pointer" onClick={handleDecr}>—</span>
                    </div>
                  </div>
                  {add?(<button onClick={()=>handleRemove(product)} className="shadow select-none text-center w-full py-[5px] bg-amber-700 text-white mt-[2%]">Remove Item</button>):(<button onClick={()=>handleAdd(product)} className="shadow select-none text-center w-full py-[5px] bg-amber-700 text-white mt-[2%]">Add Item</button>)}
              </div>
          }
      </>
    )        
}
    
  
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { useCart } from "../context/CartContext";

export const ProductPage = () => {
    const {id} = useParams();
    const [fill, setFill] = useState(false);
    const {addTocart, removeCart, cartList} = useCart();
    const [add, setAdd] = useState(false);
    const [value, setValue] = useState(1);
    const {products} = useFetch(`http://localhost:8000/products/${id}`);
    let c = products.category;

    function handleIncr(){
        if(value>=1 && value<10){
            setValue(()=>value+1);
        }
    }
    function handleDecr(){
        if(value>1 && value<=10)
        setValue(()=>value-1);
    }
    useEffect(()=>{
        document.title = `${products.name} - Bakery`
    })

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
        const value = cartList.find(item=>item.id == products.id);
        if(value){
            setAdd(true);
        }else{
            setAdd(false);
        }
    }, [cartList])

  return (
    <main>
        <section className="mt-[2%] min-h-[55vh]">
            {
    products && <div className="flex gap-[2rem]">
                    <div className="w-[30%] h-[50vh]">
                        <img className="w-full h-full object-center object-cover rounded-[1.7rem]" src={products.poster} alt={products.name} />
                    </div>
                    <div className="w-[70%]">
                        <p className="text-3xl font-bold">{products.name}</p>
                        <p className="text-2xl mt-[1.5%] mb-[1%] text-red-700 font-semibold">₹{products.price}</p>
                        <div className="flex items-center gap-[5px] h-[40px]">
                            <div className="h-full bg-slate-100 w-[120px] flex items-center justify-center text-xl">
                                <span className="flex items-center justify-center w-full h-full select-none cursor-pointer" onClick={handleIncr}>+</span>
                                <input type="number" readOnly value={value} onChange={(e)=>setValue(e.target.value)} className="focus:outline-none border-none bg-transparent text-center border-[1px] w-[40px]" min="1"/>
                                <span className="flex items-center justify-center w-full h-full select-none cursor-pointer" onClick={handleDecr}>—</span>
                            </div>
                            <div className="h-full">
                                {
                                    add?(<button onClick={()=>handleRemove(products)} className="bg-amber-700 text-white px-[15px] h-full">REMOVE ITEM</button>):(<button onClick={()=>handleAdd(products)} className="bg-amber-700 text-white px-[15px] h-full">ADD TO CART</button>)
                                }
                                
                            </div>
                            <div onClick={()=>setFill(!fill)} className="h-full w-[50px] cursor-pointer flex items-center justify-center bg-gray-100">
                                <i class={`bi ${fill?"bi-suit-heart-fill":"bi-suit-heart"} text-[1.3rem]`}></i>
                            </div>
                        </div>
                        <div className="mt-[5%]">
                            <div className="text-xl"><span className="font-semibold">Availability</span><span className="ml-[5%]">{products.in_stock?'In Stock':""}</span></div>
                            <div className="text-xl flex"><span className="font-semibold">Overview</span><span className="ml-[6.2%] w-[50%]">{products.overview}</span></div>
                            <div className="text-xl"><span className="font-semibold">Category</span><span className="ml-[6%]">{c==="base_cake"?"Base Cake":c==="flourless"?"Flourless":c==="chocolate"?"Chocolate":c==="sweet"?"Sweet":"Bread"}</span></div>
                        </div>
                    </div>
                </div>
            }
        </section>
    </main>
  )
}

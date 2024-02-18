import {CardCart} from "../components";
import { useFetch } from "../hooks/useFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import useTitle from "../hooks/useTitle";

export const ProductList = () => {
    const navigate = useNavigate();
    const url = "http://localhost:8000/products";
    const [params] = useSearchParams();
    const category = params.get('category');
    const query = params.get('q');
    const {products} = useFetch(url, category, query);
    useTitle('Products')

    function changeUrl(path){
        let newUrl = "";
        newUrl = path? `/products?category=${path}`: "/products";
        navigate(newUrl);
    }

  return (
    <main>
    <section className="mt-[2%] min-h-screen">
        <div className="flex gap-[3rem]">
            <div className="border w-[20%] h-[16rem]">
                <div className="bg-amber-700">
                    <p className="text-white font-semibold py-[3%] mx-[10%]">Shop By Category</p>
                </div>
                <div className="my-[5%] text-l">
                    <p onClick={()=>changeUrl("")} className="font-semibold hover:text-amber-700 cursor-pointer my-[2%] mx-[10%]">All</p>
                    <p onClick={()=>changeUrl("chocolate")} className="font-semibold hover:text-amber-700 cursor-pointer my-[2%] mx-[10%]">Chocolate Cake</p>
                    <p onClick={()=>changeUrl("base_cake")} className="font-semibold hover:text-amber-700 cursor-pointer py-[2%] mx-[10%]">Base Cake</p>
                    <p onClick={()=>changeUrl("flourless")} className="font-semibold hover:text-amber-700 cursor-pointer py-[2%] mx-[10%]">Flourless Cake</p>
                    <p onClick={()=>changeUrl("sweet")} className="font-semibold hover:text-amber-700 cursor-pointer py-[2%] mx-[10%]">Sweet</p>
                    <p onClick={()=>changeUrl("bread")} className="font-semibold hover:text-amber-700 cursor-pointer py-[2%] mx-[10%]">Breads</p>
                </div>
            </div>
            <div className="w-[70%] flex flex-wrap gap-[2.5rem]">
                {
                    products && products.map((product)=>(<CardCart key={product.id} product={product} />))
                }
            </div>
        </div>
    </section>
    </main>
  )
}

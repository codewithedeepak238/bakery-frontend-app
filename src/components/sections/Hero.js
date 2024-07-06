import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/hero-image.jpg"
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
    const [show, setShow] = useState(false);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const wrapRef = useRef();
    const navigate = useNavigate()
    function changeUrl(path){
        let newUrl = "";
        newUrl = path? `/products?category=${path}`: "/products";
        navigate(newUrl);
    }

    function handleSubmit(e){
        e.preventDefault();
        let newUrl = query?category?`/products?category=${category}&q=${query}`:`/products?q=${query}`:"";
        navigate(newUrl);
    }

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
    
    function changeCategory(category){
        setCategory(category);
        setShow(false);
    }
  return (
    <section>
        <div className="flex gap-[1rem]">
            {/* CATEGORY SECTION */}
        <div className="border w-[20%]">
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
        <div className="w-[80%]">
            {/* SEARCH BAR */}
            <div className="search-bar">                
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div ref={wrapRef} className="flex">
                        <button onClick={()=>setShow(!show)} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 w-[125px] text-center inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">{category==="base_cake"?"Base Cake":category==="flourless"?"Flourless":category==="chocolate"?"Chocolate":category==="sweet"?"Sweet":category==="bread"?"Bread":"All Category"}<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg></button>
                        <div id="dropdown" className={`z-10 absolute top-[27%] ${show?"":"hidden"} bg-amber-700 text-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-800`}>
                            <ul className="py-2 text-sm" aria-labelledby="dropdown-button">
                            <li>
                                <button onClick={()=>changeCategory('')} type="button" className="inline-flex w-full px-4 py-2 hover:bg-amber-900 dark:hover:bg-gray-600 dark:hover:text-white">All</button>
                            </li>
                            <li>
                                <button onClick={()=>changeCategory('chocolate')} type="button" className="inline-flex w-full px-4 py-2 hover:bg-amber-900 dark:hover:bg-gray-600 dark:hover:text-white">Chocolate Cake</button>
                            </li>
                            <li>
                                <button onClick={()=>changeCategory('base_cake')} type="button" className="inline-flex w-full px-4 py-2 hover:bg-amber-900 dark:hover:bg-gray-600 dark:hover:text-white">Base Cake</button>
                            </li>
                            <li>
                                <button onClick={()=>changeCategory('flourless')} type="button" className="inline-flex w-full px-4 py-2 hover:bg-amber-900 dark:hover:bg-gray-600 dark:hover:text-white">Flourless Cake</button>
                            </li>
                            <li>
                                <button onClick={()=>changeCategory('sweet')} type="button" className="inline-flex w-full px-4 py-2 hover:bg-amber-900 dark:hover:bg-gray-600 dark:hover:text-white">Sweet</button>
                            </li>
                            <li>
                                <button onClick={()=>changeCategory('bread')} type="button" className="inline-flex w-full px-4 py-2 hover:bg-amber-900 dark:hover:bg-gray-600 dark:hover:text-white">Breads</button>
                            </li>
                            </ul>
                        </div>
                        <div className="relative w-full">
                            <input value={query} onChange={(e)=>setQuery(e.target.value)} type="search" id="search-dropdown" className="block outline-none p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="What do you want to eat..." required/>
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-amber-700 hover:bg-amber-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div className="mt-[1rem]">
                    <img src={HeroImg} alt="hero-img" />
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

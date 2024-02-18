import { useEffect, useState } from "react";

export function useFetch(apiPath, category, query ){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        let url = query?category?`http://localhost:8000/products?category=${category}&q=${query}`:`http://localhost:8000/products?q=${query}`:category?`http://localhost:8000/products?q=${category}`:apiPath;
        async function fetchData(){
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
        }
        fetchData();
    }, [apiPath, category, query])
    return {products};
}

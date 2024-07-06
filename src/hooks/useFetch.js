import { useEffect, useState } from "react";

export function useFetch(apiPath, category, query ){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        let url = query?category?`${process.env.REACT_APP_HOST}/products?category=${category}&q=${query}`:`${process.env.REACT_APP_HOST}/products?q=${query}`:category?`${process.env.REACT_APP_HOST}/products?q=${category}`:apiPath;
        async function fetchData(){
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
        }
        fetchData();
    }, [apiPath, category, query])
    return {products};
}

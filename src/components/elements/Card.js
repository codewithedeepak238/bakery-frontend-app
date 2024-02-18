import { useNavigate } from "react-router-dom";
export const Card = ({product}) => {
  const navigate = useNavigate();
  function handleProduct(product){
    let newUrl = product.id?`/products/${product.id}`:"";
    navigate(newUrl);
  }
  return (
    <>
        {
            product &&
            <div onClick={()=>handleProduct(product)} className="cursor-pointer">
                <img className="shadow-md rounded-[1.7rem] w-[220px] h-[200px] object-center object-cover" src={product.poster} alt={product.name} />
                <p className="text-center pt-[2%]">{product.name}</p>
            </div>
        }
    </>
  )
}

import { Card } from "../elements/Card";
import { useFetch } from "../../hooks/useFetch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProductSlider = () => {
    const {products} = useFetch("http://localhost:8000/featured");
    
    // For Carousel
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="mt-[2%]">
        <Carousel responsive={responsive}>
            {
                products && products.map((product)=>(<Card key={product.id} product={product}/>))
            }
        </Carousel>
    </section>
  )
}

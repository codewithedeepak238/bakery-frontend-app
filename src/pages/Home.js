import { Hero, ProductSlider, Banner } from "../components"
import useTitle from "../hooks/useTitle"

export const Home = () => {
  useTitle('Your Own')
  return (
    <main className="pt-[1%]">
      <Hero/>
      <ProductSlider/>
      <Banner/>
    </main>
  )
}

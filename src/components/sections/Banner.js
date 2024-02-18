import banner from "../../assets/bakery-banner.jpg"

export const Banner = () => {
  return (
    <div className="mt-[5%] w-full h-[50vh]">
        <div className="float-left pl-[8rem] pt-[2rem]">
            <div className="w-[500px]">
                <h1 className="text-7xl font-bold text-amber-900">MAKING YOUR OWN BAKERY</h1>
                <p className="mt-[1%] text-center text-white py-[5px] bg-amber-900 w-[70%]">Open Everyday. Start from 7 AM — 9 PM</p>
                <p className="mt-[5%]">The best bread you can find near your home, you can also create your own bright ideas about your dream cake so we can make it happen!</p>
            </div>
        </div>
        <img className="object-fill object-center h-full float-right" src={banner} alt="bakery-banner" />
    </div>
  )
}

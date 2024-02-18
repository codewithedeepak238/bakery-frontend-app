import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
export const Footer = () => {
  return (
      <footer className="mt-[5%] bg-white dark:bg-gray-900 px-[3%]">
          <div className="w-full mx-auto p-4 border-t-[1px] border-stone-300">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <Link to={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                      <img src={logo} className="h-20" alt="Bakery logo" />
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-l font-medium text-black sm:mb-0 dark:text-gray-400">
                      <li>
                          <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
                      </li>
                      <li>
                          <Link to="/products" className="hover:underline me-4 md:me-6">Products</Link>
                      </li>
                      <li>
                          <Link to="#" className="hover:underline me-4 md:me-6">Categories</Link>
                      </li>
                      <li>
                          <Link to="#" className="hover:underline">Contact</Link>
                      </li>
                  </ul>
              </div>              
          </div>
      </footer>
  )
}

import { Link } from "react-router-dom"
import logo from "../img/logo-color.png"

import Socials from './Socials'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href='/'>
            <img
              src={logo}
              width={220}
              height={48}
              alt=""
            />
          </Link>
          <Socials />
        </div>  
      </div>
    </header>
    )
};

export default Header

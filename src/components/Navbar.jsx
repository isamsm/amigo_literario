import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState()

  const showNav = () => {
    setOpen(!open)
  }

  const handleButtonClick = (buttonId) => {
    document.getElementById(buttonId).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div className="w-full flex sm:justify-start md:justify-center lg:justify-end bg-transparent top-0 z-50">
        <div className="w-screen sm:flex md:hidden lg:hidden bg-orangeSecundary">
          <div className="icon-mobile flex text-newBlack text-3xl p-2">
            <a onClick={showNav}> <IoMdMenu /> </a>
          </div>
          <div className={open ? 'navbar-mobile flex flex-col items-center text-newBlack text-xl font-semibold p-2' : 'hidden'}>
            <a className="hover:underline cursor-pointer" onClick={() => handleButtonClick('about')}> sobre </a>
            <a className="hover:underline cursor-pointer" onClick={() => handleButtonClick('how_it_works')}> como funciona </a>
            <a className="hover:underline cursor-pointer" onClick={() => handleButtonClick('benefits')}> benefícios </a>
            <a className="hover:underline cursor-pointer" onClick={() => handleButtonClick('clients')}> depoimentos </a>
            <a className="text-orangePrimary hover:underline cursor-pointer" onClick={() => handleButtonClick('join')}> participe </a>
          </div>
        </div>
        <div className="navbar w-4/6 flex justify-around h-12 items-center text-white text-xl font-semibold">
          <a className="hover:underline cursor-pointer" onClick={() => handleButtonClick('about')}> sobre </a>
          <a className="hover:underline cursor-pointer" onClick={() => handleButtonClick('how_it_works')}> como funciona </a>
          <a className="hover:underline cursor-pointer" onClick={() => handleButtonClick('benefits')}> benefícios </a>
          <a className="hover:underline cursor-pointer" onClick={() => handleButtonClick('clients')}> depoimentos </a>
          <a className="text-orangePrimary hover:underline cursor-pointer" onClick={() => handleButtonClick('join')}> participe </a>
        </div>
      </div>
    </>
  )
}

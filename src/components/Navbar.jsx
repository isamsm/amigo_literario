import { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'

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
      <div className="w-full flex justify-start md:justify-end lg:justify-end bg-transparent">
        <div className="navbar md:w-10/12 lg:w-4/6 flex justify-around h-12 items-center text-white text-xl font-semibold">
          <a
            className="hover:underline cursor-pointer"
            onClick={() => handleButtonClick('about')}
          >
            {' '}
            sobre{' '}
          </a>
          <a
            className="hover:underline cursor-pointer"
            onClick={() => handleButtonClick('how_it_works')}
          >
            {' '}
            como funciona{' '}
          </a>
          <a
            className="hover:underline cursor-pointer"
            onClick={() => handleButtonClick('benefits')}
          >
            {' '}
            benefícios{' '}
          </a>
          <a
            className="hover:underline cursor-pointer"
            onClick={() => handleButtonClick('clients')}
          >
            {' '}
            depoimentos{' '}
          </a>
          <a
            className="text-orangePrimary hover:bg-orangePrimary hover:text-orangeFifth hover:py-1 hover:px-5 hover:rounded-md cursor-pointer"
            onClick={() => handleButtonClick('join')}
          >
            {' '}
            participe{' '}
          </a>
        </div>
      </div>
      <div className="w-screen sm:flex md:hidden lg:hidden bg-orangePrimary">
        <div className="icon-mobile flex text-white text-3xl p-2">
          <a onClick={showNav}>
            {' '}
            <IoMdMenu />{' '}
          </a>
        </div>
        <div
          className={
            open
              ? 'navbar-mobile flex flex-col items-center text-white text-xl font-semibold p-2'
              : 'hidden'
          }
        >
          <a
            className="hover:underline cursor-pointer"
            onClick={() => handleButtonClick('about')}
          >
            {' '}
            sobre{' '}
          </a>
          <a
            className="hover:underline cursor-pointer"
            onClick={() => handleButtonClick('how_it_works')}
          >
            {' '}
            como funciona{' '}
          </a>
          <a
            className="hover:underline cursor-pointer"
            onClick={() => handleButtonClick('benefits')}
          >
            {' '}
            benefícios{' '}
          </a>
          <a
            className="hover:underline cursor-pointer"
            onClick={() => handleButtonClick('clients')}
          >
            {' '}
            depoimentos{' '}
          </a>
          <a
            className="text-orangeSecundary hover:bg-orangeSecundary hover:text-orangePrimary hover:py-1 hover:px-5 hover:rounded-md cursor-pointer"
            onClick={() => handleButtonClick('join')}
          >
            {' '}
            participe{' '}
          </a>
        </div>
      </div>
    </>
  )
}

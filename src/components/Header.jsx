import Navbar from '../components/Navbar'

export default function Header() {
  return (
    <>
      <div id="header" className="bg-header w-full h-1/2 lg:h-screen text-white">
        <div data-aos="fade-down" className="header-content">
          <Navbar />
          <div className="h-80 lg:h-screen">
            <div className="flex flex-col justify-center items-start h-full pl-14 md:pl-24 lg:pl-24 gap-2">
              <h1 className="text-orangePrimary text-3xl md:text-4xl lg:text-4xl font-bold">
                {' '}
                AMIGO LITERÁRIO{' '}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-3xl w-3/4 lg:w-1/4 font-semibold">
                {' '}
                Troque Livros e Descubra Novas Histórias!{' '}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import about from './assets/about.png'
import mail from './assets/how_it_works.png'
import exploration from './assets/exploration.svg'
import sustentability from './assets/sustentability.svg'
import community from './assets/community.svg'
import surprise from './assets/surprise.svg'
import maria from './assets/maria.png'
import joao from './assets/joao.png'
import ana from './assets/ana.png'

function App() {
  return (
    <>
      <div className="text-newBlack font-poppins">
        <Header />
        <div id="about">
          <div
            data-aos="fade-down"
            className="h-full lg:h-screen p-10 lg:p-0 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0 md:gap-10 lg:justify-between"
          >
            <div className="flex flex-col gap-3 p-5 md:p-0 lg:p-0 md:pl-24 lg:pl-24">
              <h1 className="text-orangePrimary text-3xl md:text-4xl lg:text-4xl font-bold">
                {' '}
                SOBRE{' '}
              </h1>
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold">
                {' '}
                Descubra a Magia da Troca de Livros{' '}
              </h3>
              <p className="text-lg md:text-xl lg:text-xl pt-2 md:w-10/12 lg:w-10/12">
                {' '}
                Bem-vindo ao Amigo Literário, uma comunidade apaixonada por
                leitura onde você pode desapegar de livros que já leu e receber
                novas aventuras literárias em troca. Participe do nosso clube de
                troca de livros e expanda seus horizontes literários de maneira
                divertida e sustentável.{' '}
              </p>
            </div>
            <div className="flex md:pr-56 lg:pr-56">
              <img
                className="h-48 md:h-72 lg:h-96 absolute z-40"
                src={about}
                alt="Imagem de pilha de livro"
              />
              <div className="h-48 md:h-72 lg:h-96 w-44 md:w-56 lg:w-72 relative top-5 md:top-6 lg:top-10 left-10 md:left-28 lg:left-48 z-30 rounded bg-gradient-to-b from-orangeSecundary to-orangeFourth"></div>
            </div>
          </div>
        </div>
        <div id="how_it_works">
          <div
            data-aos="fade-down"
            className="h-full lg:h-screen p-10 lg:p-0 flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-0 lg:justify-around items-center"
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-orangePrimary text-3xl md:text-4xl lg:text-4xl font-bold">
                {' '}
                COMO FUNCIONA?{' '}
              </h1>
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold pb-5">
                {' '}
                É Simples e Divertido{' '}
              </h3>
              <img
                style={{ marginLeft: '-30px' }}
                className="h-48 md:h-64 lg:h-64"
                src={mail}
                alt="Imagem entregador"
              />
            </div>
            <div className="flex flex-col gap-5 bg-orangeThird rounded-md h-6/12 w-80 md:w-4/6 lg:w-2/6 p-5">
              <div className="flex gap-5 items-center">
                <div className="bg-orangeSecundary rounded-full px-3 py-1">
                  <p className="text-orangePrimary text-2xl text-center font-bold">
                    {' '}
                    1{' '}
                  </p>
                </div>
                <p className="md:text-lg lg:text-lg">
                  {' '}
                  Desapegue - Escolha um livro da sua estante que você gostaria
                  de compartilhar.{' '}
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <div className="bg-orangeSecundary rounded-full px-3 py-1">
                  <p className="text-orangePrimary text-2xl text-center font-bold">
                    {' '}
                    2{' '}
                  </p>
                </div>
                <p className="md:text-lg lg:text-lg">
                  {' '}
                  Envie - Envie o seu livro para um novo amigo literário.{' '}
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <div className="bg-orangeSecundary rounded-full px-3 py-1">
                  <p className="text-orangePrimary text-2xl text-center font-bold">
                    {' '}
                    3{' '}
                  </p>
                </div>
                <p className="md:text-lg lg:text-lg">
                  {' '}
                  Receba - Receba um novo livro que alguém enviou para você.
                  Você pode escolher o gênero que prefere ou optar por uma
                  surpresa!{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="benefits">
          <div
            data-aos="fade-down"
            className="h-full lg:h-screen p-10 lg:p-0 flex flex-col justify-center gap-9 items-center text-center"
          >
            <div className="flex flex-col md:gap-3 lg:gap-3">
              <h1 className="text-orangePrimary text-3xl md:text-4xl lg:text-4xl font-bold">
                {' '}
                BENEFÍCIOS{' '}
              </h1>
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold md:pb-5 lg:pb-5">
                {' '}
                Por Que Participar?{' '}
              </h3>
            </div>
            <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row justify-around w-8/12">
              <div className="flex flex-col text-lg">
                <img
                  className="h-12 md:h-24 lg:h-36 mb-5"
                  src={exploration}
                  alt="Icone de exploração"
                />
                <p className="text-orangePrimary font-medium">
                  {' '}
                  Exploração Literária{' '}
                </p>
                <p className="lg:w-44"> Descubra novos autores e gêneros. </p>
              </div>
              <div className="flex flex-col text-lg">
                <img
                  className="h-12 md:h-24 lg:h-36 mb-5"
                  src={sustentability}
                  alt="Icone de sustentabilidade"
                />
                <p className="text-orangePrimary font-medium">
                  {' '}
                  Sustentabilidade{' '}
                </p>
                <p className="lg:w-40">
                  {' '}
                  Dê uma nova vida aos livros que você já leu.{' '}
                </p>
              </div>
              <div className="flex flex-col text-lg">
                <img
                  className="h-12 md:h-24 lg:h-36 mb-5"
                  src={community}
                  alt="Icone de comunicação"
                />
                <p className="text-orangePrimary font-medium"> Comunidade </p>
                <p className="lg:w-44">
                  {' '}
                  Faça parte de uma rede de leitores apaixonados como você.{' '}
                </p>
              </div>
              <div className="flex flex-col text-lg">
                <img
                  className="h-12 md:h-24 lg:h-36 mb-5"
                  src={surprise}
                  alt="Icone de surpresas"
                />
                <p className="text-orangePrimary font-medium"> Surpresas </p>
                <p className="lg:w-44">
                  {' '}
                  Receba livros inesperados que podem se tornar seus novos
                  favoritos.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="clients" className="bg-orangeSecundary">
          <div
            data-aos="fade-down"
            className="p-10 lg:p-0 h-full lg:h-screen flex flex-col justify-center md:gap-9 lg:gap-9 items-center"
          >
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-orangePrimary text-3xl md:text-4xl lg:text-4xl font-bold">
                {' '}
                DEPOIMENTOS{' '}
              </h1>
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold pb-5">
                {' '}
                O Que Nossos Membros Dizem{' '}
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row lg:w-9/12 gap-5 lg:justify-around">
              <div>
                <div className="border md:h-64 lg:h-64 p-5 w-80 border-orangePrimary rounded-md">
                  <div className="flex items-center gap-3">
                    <img
                      src={maria}
                      className="h-12 md:h-20 lg:h-20"
                      alt="Foto da Maria"
                    />
                    <p className="text-lg font-medium"> Maria S </p>
                  </div>
                  <p className="pt-3 text-lg">
                    {' '}
                    Participar do Amigo Literário foi uma experiência incrível!
                    Recebi um livro que nunca teria escolhido por conta própria
                    e adorei.{' '}
                  </p>
                </div>
              </div>
              <div>
                <div className="border md:h-64 lg:h-64 p-5 w-80 border-orangePrimary rounded-md">
                  <div className="flex items-center gap-3">
                    <img
                      src={joao}
                      className="h-12 md:h-20 lg:h-20"
                      alt="Foto do João"
                    />
                    <p className="text-lg font-medium"> João P </p>
                  </div>
                  <p className="pt-3 text-lg">
                    {' '}
                    É maravilhoso ver meu livro viajando e fazendo novos amigos
                    pelo país!{' '}
                  </p>
                </div>
              </div>
              <div>
                <div className="border md:h-64 lg:h-64 p-5 w-80 border-orangePrimary rounded-md">
                  <div className="flex items-center gap-3">
                    <img
                      src={ana}
                      className="h-12 md:h-20 lg:h-20"
                      alt="Foto da Ana"
                    />
                    <p className="text-lg font-medium"> Ana L </p>
                  </div>
                  <p className="pt-3 text-lg">
                    {' '}
                    Adoro a expectativa de esperar um novo livro surpresa
                    chegar. É como se fosse um presente.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="join"
          className="bg-join p-5 lg:p-0 h-56 lg:h-80 text-white flex items-center"
        >
          <div
            data-aos="fade-down"
            className="join-content flex gap-3 w-full items-center md:justify-around lg:justify-around"
          >
            <div className="flex flex-col lg:w-7/12 gap-2">
              <h1 className="text-orangePrimary text-xl md:text-3xl lg:text-4xl font-bold">
                {' '}
                junte-se a nós{' '}
              </h1>
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold pb-1 lg:pb-5">
                {' '}
                pronto para começar?{' '}
              </h3>
              <p className="text-sm md:text-lg lg:text-xl">
                {' '}
                Entre para o Amigo Literário hoje mesmo e comece a trocar livros
                com outros amantes da leitura. É fácil, divertido e uma maneira
                fantástica de explorar novas histórias. Clique no botão abaixo
                para se inscrever!{' '}
              </p>
            </div>
            <div>
              <button className="bg-orangePrimary hover:bg-orangeSecundary hover:text-orangePrimary text-orangeThird p-3 md:w-56 lg:w-72 rounded-md text-sm md:text-2xl lg:text-2xl font-semibold">
                {' '}
                inscreva-se agora{' '}
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

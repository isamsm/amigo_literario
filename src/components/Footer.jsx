export default function Footer() {
  return (
    <>
      <footer className="bg-newBlack text-white">
        <div
          data-aos="fade-down"
          className="h-80 md:h-64 lg:h-64 gap-2 text-center flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold"> Contate-nos </h3>
          <p className="md:text-lg lg:text-lg w-11/12 md:w-6/12 lg:w-6/12">
            {' '}
            Tem dúvidas? Quer saber mais? Entre em contato conosco pelo e-mail{' '}
            <a className="underline">contato@amigoliterario.com</a> ou siga-nos
            nas redes sociais.{' '}
          </p>
          <p className="text-orangeSecundary font-semibold pt-3">
            {' '}
            Amigo Literário - Conectando Leitores, Transformando Histórias{' '}
          </p>
        </div>
      </footer>
      <div className="bg-newBlack text-white flex justify-center">
        <p className="text-sm"> © Isa Marques, 2024 </p>
      </div>
    </>
  )
}
